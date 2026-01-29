from fastapi import APIRouter, UploadFile, File, HTTPException
import tempfile
import os

from core.file_utils import extract_text_from_pdf
from core.summarizer import summarize_medical_text
from core.fhir_builder import build_fhir_bundle
from schemas.response import SummaryResponse

router = APIRouter(
    prefix="/medical",
    tags=["Medical Summarization"]
)

@router.post("/summarize", response_model=SummaryResponse)
async def summarize_medical_document(file: UploadFile = File(...)):
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are supported")

    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
            tmp.write(await file.read())
            tmp_path = tmp.name

        text = extract_text_from_pdf(tmp_path)
        os.unlink(tmp_path)

        if not text.strip():
            raise HTTPException(status_code=400, detail="Could not extract text from PDF")

        summary = summarize_medical_text(text)
        fhir_bundle = build_fhir_bundle(summary)

        return SummaryResponse(
            summary_text=summary,
            fhir_bundle=fhir_bundle
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise RuntimeError("GEMINI_API_KEY not found in environment")

client = genai.Client(api_key=GEMINI_API_KEY)

MODEL_NAME = "gemini-2.5-flash"

SYSTEM_PROMPT = """
You are a senior board-certified physician.

Rules:
- Summarize ONLY what is present in the document
- Use professional clinical language
- Do NOT hallucinate
- Do NOT invent diagnoses, labs, or medications
- Output must be suitable for EHR systems

Use this structure:
1. Chief Complaint
2. History of Present Illness
3. Diagnosis
4. Medications
5. Follow-up Instructions
"""

def summarize_medical_text(document_text: str) -> str:
    prompt = f"""{SYSTEM_PROMPT}

MEDICAL DOCUMENT:
{document_text}
"""

    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt  # ✅ must be STRING
    )

    if not response or not response.text:
        raise RuntimeError("Empty response from Gemini")

    return response.text.strip()

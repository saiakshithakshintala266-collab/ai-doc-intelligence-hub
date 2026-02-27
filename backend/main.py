from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes_medical import router as medical_router

app = FastAPI(
    title="AI Medical Summarizer",
    description="Clinical-grade document summarization for healthcare",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(medical_router)

@app.get("/")
def root():
    return {"status": "Medical AI Summarizer running"}

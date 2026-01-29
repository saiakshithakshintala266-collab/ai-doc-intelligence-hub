from pydantic import BaseModel
from typing import Dict, Any

class SummaryResponse(BaseModel):
    summary_text: str
    fhir_bundle: Dict[str, Any]

import base64
from typing import Dict, Any

def build_fhir_bundle(summary_text: str) -> Dict[str, Any]:
    encoded_summary = base64.b64encode(summary_text.encode()).decode()

    return {
        "resourceType": "Bundle",
        "type": "collection",
        "entry": [
            {
                "resource": {
                    "resourceType": "DocumentReference",
                    "status": "current",
                    "description": "AI-generated outpatient clinical summary",
                    "content": [
                        {
                            "attachment": {
                                "contentType": "text/plain",
                                "data": encoded_summary
                            }
                        }
                    ]
                }
            }
        ]
    }

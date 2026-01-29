import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

export async function summarizeMedicalDoc(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    `${API_BASE}/medical/summarize`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  return response.data;
}

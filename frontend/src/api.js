import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function summarizeMedicalDoc(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    `${API_BASE}/medical/summarize`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }
  );

  return response.data;
}

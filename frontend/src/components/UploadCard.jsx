import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function UploadCard({ onUpload, loading }) {
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    if (!file) return;
    onUpload(file);
  };

  return (
    <div className="card">
      <h2>Upload Medical Document</h2>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Processing..." : "Generate Summary"}
      </button>
      {loading && <LoadingSpinner />}
    </div>
  );
}

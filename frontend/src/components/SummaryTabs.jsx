import { useState } from "react";

export default function SummaryTabs({ data }) {
  const [tab, setTab] = useState("clinical");

  return (
    <div className="card">
      <div className="tabs">
        <button onClick={() => setTab("clinical")}>Clinical Summary</button>
        <button onClick={() => setTab("patient")}>Patient Summary</button>
        <button onClick={() => setTab("fhir")}>FHIR JSON</button>
      </div>

      <div className="tab-content">
        {tab === "clinical" && <pre>{data.summary_text}</pre>}
        {tab === "patient" && (
          <pre>{data.patient_summary || "Coming soon…"}</pre>
        )}
        {tab === "fhir" && (
          <pre>{JSON.stringify(data.fhir_bundle, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

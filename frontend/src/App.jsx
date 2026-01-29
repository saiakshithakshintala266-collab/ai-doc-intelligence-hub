import { useState } from "react";

/* ----------------------------------
   Shared Style Tokens (Reusable)
-----------------------------------*/
const card =
  "bg-white rounded-2xl border shadow-sm p-8";

const sectionCard =
  "rounded-xl p-6 shadow-sm border-l-4";

const sectionTitle =
  "text-base font-semibold text-slate-900 mb-3";

const sectionBody =
  "space-y-2 text-[15px] leading-relaxed text-slate-800";

/* ----------------------------------
   Section Accent Colors
-----------------------------------*/
const SECTION_STYLES = {
  "Chief Complaint": "border-blue-500 bg-blue-50",
  "History of Present Illness": "border-indigo-500 bg-indigo-50",
  Diagnosis: "border-red-500 bg-red-50",
  Medications: "border-emerald-500 bg-emerald-50",
  "Follow-Up Instructions": "border-amber-500 bg-amber-50",
};

/* ----------------------------------
   Robust Summary Parser
   (FIXES YOUR ISSUE)
-----------------------------------*/
function parseSummary(text) {
  const sections = [];
  const regex =
    /\*\*\s*\d*\.?\s*(.+?)\s*:?\s*\*\*\n([\s\S]*?)(?=\n\*\*|\n?$)/g;

  let match;
  while ((match = regex.exec(text)) !== null) {
    sections.push({
      title: match[1].trim(),
      content: match[2]
        .trim()
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean),
    });
  }

  return sections;
}

/* ----------------------------------
   App Component
-----------------------------------*/
export default function App() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!file) return;

    setLoading(true);
    setError("");
    setSummary("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/medical/summarize",
        { method: "POST", body: formData }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail);

      setSummary(data.summary_text);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const sections = summary ? parseSummary(summary) : [];

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center px-4 py-12">
      <div className="w-full max-w-4xl space-y-10">

        {/* ---------- HEADER ---------- */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            AI Medical Document Summarizer
          </h1>
          <p className="text-slate-600">
            Clinician-ready summaries for EHR workflows
          </p>
        </header>

        {/* ---------- UPLOAD ---------- */}
        <section className={card}>
          <h2 className="text-lg font-semibold mb-4">
            Upload Medical PDF
          </h2>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full text-sm text-slate-600
              file:mr-4 file:py-2.5 file:px-4
              file:rounded-lg file:border-0
              file:bg-slate-100 file:text-slate-700
              hover:file:bg-slate-200"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg
              font-medium hover:bg-blue-700 transition
              disabled:opacity-50"
          >
            {loading
              ? "Analyzing document…"
              : "Generate Clinical Summary"}
          </button>

          {error && (
            <p className="text-red-600 text-sm mt-4">{error}</p>
          )}
        </section>

        {/* ---------- SUMMARY ---------- */}
        {sections.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-xl font-semibold">
              🧠 AI-Generated Clinical Summary
            </h2>

            {sections.map((section, idx) => {
              const style =
                SECTION_STYLES[section.title] ||
                "border-slate-400 bg-slate-50";

              return (
                <div
                  key={idx}
                  className={`${sectionCard} ${style}`}
                >
                  <h3 className={sectionTitle}>
                    {section.title}
                  </h3>

                  <div className={sectionBody}>
                    {section.content.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* ---------- RAW FALLBACK ---------- */}
        {summary && sections.length === 0 && (
          <section className={card}>
            <h2 className="font-semibold mb-3">
              🧠 AI-Generated Summary
            </h2>
            <pre className="whitespace-pre-wrap text-sm text-slate-800">
              {summary}
            </pre>
          </section>
        )}
      </div>
    </div>
  );
}

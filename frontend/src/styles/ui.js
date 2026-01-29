export const layout = {
  page: "min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-4 py-14 flex justify-center",
  container: "w-full max-w-5xl space-y-14",
};

export const card = {
  base: "bg-white rounded-3xl border shadow-md p-10",
  section: "rounded-2xl p-8 shadow-sm border-l-4",
};

export const typography = {
  h1: "text-4xl font-semibold tracking-tight text-slate-900",
  h2: "text-2xl font-semibold text-slate-900",
  h3: "text-lg font-semibold mb-4",
  body: "text-[15.5px] leading-relaxed text-slate-800 break-words",
  muted: "text-slate-600",
};

export const button = {
  primary:
    "w-full bg-blue-600 text-white py-4 rounded-xl font-medium text-lg hover:bg-blue-700 transition disabled:opacity-50",
};

export const fileInput =
  "block w-full text-sm text-slate-600 file:mr-4 file:py-3 file:px-5 file:rounded-xl file:border-0 file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200";

export const sectionThemes = {
  "Chief Complaint": "border-blue-500 bg-blue-50 text-blue-900",
  "History of Present Illness": "border-indigo-500 bg-indigo-50 text-indigo-900",
  Diagnosis: "border-red-500 bg-red-50 text-red-900",
  Medications: "border-emerald-500 bg-emerald-50 text-emerald-900",
  "Follow-Up Instructions": "border-amber-500 bg-amber-50 text-amber-900",
};

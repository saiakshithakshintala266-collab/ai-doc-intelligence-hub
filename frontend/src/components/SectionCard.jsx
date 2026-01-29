import { card } from "../styles/card";
import { SECTION_THEME } from "../styles/theme";

export default function SectionCard({ title, content }) {
  const theme =
    SECTION_THEME[title] || "border-slate-400 bg-slate-50";

  return (
    <div className={`${card.section} ${theme}`}>
      <h3 className="font-semibold text-slate-900 mb-3">
        {title}
      </h3>

      <div className="space-y-2 text-[15px] text-slate-800 leading-relaxed">
        {content.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}

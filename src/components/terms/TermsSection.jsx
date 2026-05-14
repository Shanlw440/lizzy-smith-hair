export default function TermsSection({ title, children }) {
  return (
    <div className="mb-8">
      <h3
        className="text-2xl text-[#3E342C] mb-3"
        style={{ fontFamily: "Cormorant Garamond" }}
      >
        {title}
      </h3>

      <div className="text-sm text-[#6B6259] leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
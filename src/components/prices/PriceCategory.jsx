export default function PriceCategory({ title, items }) {
  return (
    <div className="mb-10">
      <h3
        className="text-2xl text-[#3E342C] mb-4 pb-2 border-b border-[#DDD6CC]"
        style={{ fontFamily: "Cormorant Garamond" }}
      >
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="flex items-baseline gap-3">
            <span className="text-sm text-[#3E342C]">{item.name}</span>
            <span className="flex-1 border-b border-dotted border-[#CFC6BA]" />
            <span className="text-sm font-semibold text-[#5D7A63] whitespace-nowrap">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
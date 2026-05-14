import PriceCategory from "../components/prices/PriceCategory";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const priceSections = [
  {
    title: "Cutting & Styling",
    items: [
      { name: "Dry Cut", price: "£20" },
      { name: "Cut & Blow Dry", price: "£35" },
      { name: "Blow Dry", price: "£20" },
    ],
  },
  {
    title: "Colour Services",
    items: [
      { name: "Root Colour", price: "£35" },
      { name: "Full Head Colour", price: "£45" },
      { name: "Toner", price: "£15" },
    ],
  },
  {
    title: "Foils & Specialist Colour",
    items: [
      { name: "T-Section Foils", price: "£45" },
      { name: "Half Head Foils", price: "£60" },
      { name: "Full Head Foils", price: "£75" },
      { name: "Balayage", price: "Price on consultation" },
    ],
  },
];

export default function Prices() {
  return (
    <section className="px-6 pt-32 pb-20 bg-[#F6F3EE] min-h-screen">
      <div className="max-w-md mx-auto">
        <Link
  to="/"
  className="inline-flex items-center gap-2 text-sm text-[#5D7A63] font-semibold mb-8"
>
  <ArrowLeft className="w-4 h-4" />
  Back to Home
</Link>
        <div className="text-center mb-12">
          <h1
            className="text-5xl text-[#3E342C]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Prices
          </h1>

          <p className="text-sm text-[#7A7268] mt-4 leading-relaxed">
            A guide to Lizzy Smith Hairdressing services. Final prices may vary depending on hair length, condition and consultation.
          </p>
        </div>

        {priceSections.map((section) => (
          <PriceCategory
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}

        <div className="bg-[#EFE9DF] rounded-2xl p-5 text-center mt-10">
          <p className="text-sm text-[#6B6259] leading-relaxed">
            Colour services may require a skin test before your appointment.
          </p>
        </div>
      </div>
    </section>
  );
}
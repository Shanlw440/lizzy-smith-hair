import { Scissors, Palette, Sparkles, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Scissors,
    title: "Cut & Styling",
    desc: "Precision cuts, blow dries and everyday styling.",
    price: "From £20",
  },
  {
    icon: Palette,
    title: "Colour Services",
    desc: "Root colour, full head colour and gloss treatments.",
    price: "From £35",
  },
  {
    icon: Sparkles,
    title: "Specialist Colour",
    desc: "Foils, bleach and tone, bespoke colouring and corrections.",
    price: "From £45",
  },
];

export default function ServicesPreview() {
  return (
    <section className="px-6 py-16 bg-[#EFE9DF]">
      <div className="max-w-md mx-auto">

        <div className="text-center mb-10">
          <h2
            className="text-4xl text-[#3E342C]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Services
          </h2>

          <div className="w-14 h-px bg-[#5D7A63]/30 mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#DDD6CC]"
              >
                <div className="flex gap-4 items-start">

                  <div className="w-11 h-11 rounded-xl bg-[#5D7A63]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#5D7A63]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between gap-3 items-start">
                      <h3 className="font-semibold text-sm text-[#3E342C]">
                        {service.title}
                      </h3>

                      <span className="text-xs font-semibold text-[#5D7A63] whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#7A7268] mt-1 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/prices"
            className="inline-flex items-center gap-1 text-[#5D7A63] text-sm font-semibold"
          >
            View Full Price List
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
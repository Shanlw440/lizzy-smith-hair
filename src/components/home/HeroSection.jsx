import { Calendar, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpeg"
          alt="Lizzy Smith Hairdressing"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-80">
        <div className="max-w-md mx-auto text-center text-white">
          <p className="text-sm uppercase tracking-[0.25em] mb-3 text-white/80">
            Lizzy Smith Hairdressing
          </p>

          <h1
            className="text-5xl font-light mb-3"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Colour Specialist
          </h1>

          <p className="text-sm tracking-wide opacity-90 mb-3">
            Kings Lynn, Norfolk
          </p>

          <div className="flex items-center justify-center gap-2 text-xs opacity-80 mb-16">
            <Sparkles className="w-3 h-3" />
            <span>Over 20 Years Experience</span>
            <span>•</span>
            <span>Mobile & Salon</span>
          </div>

          <button className="bg-[#5D7A63] hover:bg-[#4f6855] transition-colors px-8 py-4 rounded-2xl font-medium flex items-center justify-center gap-2 mx-auto translate-y-46">
            <Calendar className="w-5 h-5" />
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
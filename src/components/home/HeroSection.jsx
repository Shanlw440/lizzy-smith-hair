import { Calendar, Sparkles } from "lucide-react";

const BOOK_URL = "https://ig.me/m/lizzysmithhair";

// Save for later:
// const BOOKSOLO_URL = "https://booksolo.co/draft-5491022563/book/location?directBooking=true";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpeg"
          alt="Lizzy Smith Hairdressing"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 w-full px-6 pb-20">
        <div className="max-w-md mx-auto text-center text-white">
          

          <div className="-translate-y-70">
            <h1
              className="text-5xl font-light mb-3"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Colour Specialist
            </h1>

            <p className="text-sm tracking-wide opacity-90 mb-3">
              Kings Lynn, Norfolk
            </p>

            <div className="flex items-center justify-center gap-2 text-xs opacity-80">
              <Sparkles className="w-3 h-3" />
              <span>Over 20 Years Experience</span>
              <span>•</span>
              <span>Mobile & Salon</span>
            </div>
          </div>

          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5D7A63] hover:bg-[#4f6855] transition-colors px-8 py-4 rounded-2xl font-medium flex items-center justify-center gap-2 mx-auto -mt-10"
          >
            <Calendar className="w-5 h-5" />
            Message to Book
          </a>
        </div>
      </div>
    </section>
  );
}
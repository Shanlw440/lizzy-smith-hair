import { Camera } from "lucide-react";

const workImages = [
  "/images/work1.jpeg",
  "/images/work2.jpeg",
  "/images/work3.jpeg",
  "/images/work4.jpeg",
];

export default function MyWorkSection() {
  return (
    <section className="px-6 py-16 bg-[#F6F3EE]">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-4xl text-[#3E342C]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            My Work
          </h2>

          <p className="text-sm text-[#7A7268] mt-3">
            Bespoke colour, soft blends and natural transformations.
          </p>

          <div className="w-14 h-px bg-[#5D7A63]/30 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {workImages.map((image, index) => (
            <div
              key={index}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm bg-[#EFE9DF]"
            >
              <img
                src={image}
                alt={`Lizzy Smith hair work ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/lizzysmithhair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#5D7A63] text-sm font-semibold"
          >
            <Camera className="w-4 h-4" />
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
import { Leaf } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="px-6 py-16">

      <div className="max-w-md mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">

          <Leaf className="w-5 h-5 mx-auto text-[#5D7A63] mb-4" />

          <h2
            className="text-4xl text-[#3E342C]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            About Me
          </h2>

          <div className="w-14 h-px bg-[#5D7A63]/30 mx-auto mt-4" />

        </div>

        {/* Image */}
        <div className="rounded-[2rem] overflow-hidden mb-8 shadow-lg">

          <img
            src="/images/about.jpeg"
            alt="Lizzy Smith"
            className="w-full h-full object-cover"
          />

        </div>

        {/* Text */}
        <div className="space-y-5 text-center">
  <p className="text-[#6B6259] leading-relaxed text-[15px]">
    Hi, I’m Lizzy, a colour specialist based in Kings Lynn, Norfolk with over 20 years of experience in hairdressing.
  </p>

  <p className="text-[#6B6259] leading-relaxed text-[15px]">
    I love creating beautiful, natural-looking colour tailored to each individual client, whether that’s soft blondes, dimensional foils, root refreshes or complete transformations.
  </p>

  <p className="text-[#6B6259] leading-relaxed text-[15px]">
    I offer both salon and mobile appointments, creating a relaxed and friendly experience where you can feel comfortable, confident and looked after.
  </p>

  <p className="text-[#6B6259] leading-relaxed text-[15px]">
    My goal is simple, to help you leave feeling your absolute best.
  </p>
</div>

      </div>

    </section>
  );
}
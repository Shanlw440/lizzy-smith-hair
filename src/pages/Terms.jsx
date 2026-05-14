import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TermsSection from "../components/terms/TermsSection";

export default function Terms() {
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
            Terms & Conditions
          </h1>

          <p className="text-sm text-[#7A7268] mt-4">
            Important appointment and service information.
          </p>

        </div>

        <TermsSection title="Appointments">
          <p>
            Please arrive on time for your appointment. Late arrivals may result
            in reduced service time or the need to reschedule.
          </p>
        </TermsSection>

        <TermsSection title="Cancellations">
          <p>
            Please give as much notice as possible if you need to cancel or
            rearrange your appointment.
          </p>
        </TermsSection>

        <TermsSection title="Skin Tests">
          <p>
            Colour services may require a skin test before your appointment.
            This is for your safety and must be completed where required.
          </p>
        </TermsSection>

        <TermsSection title="Colour Results">
          <p>
            Colour results can vary depending on hair history, condition,
            previous colour, and product build-up.
          </p>
        </TermsSection>

        <TermsSection title="Mobile Appointments">
          <p>
            Mobile appointments may be subject to travel availability depending
            on location.
          </p>
        </TermsSection>

      </div>
    </section>
  );
}
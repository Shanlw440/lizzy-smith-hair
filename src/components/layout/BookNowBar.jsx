import { Calendar } from "lucide-react";

export default function BookNowBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#F6F3EE]/95 backdrop-blur-md border-t border-black/5 z-50 md:hidden">

      <button className="w-full bg-[#5D7A63] text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-medium">

        <Calendar className="w-5 h-5" />

        Book Appointment

      </button>

    </div>
  );
}
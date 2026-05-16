import { MapPin, Camera, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

const BOOK_URL = "https://ig.me/m/lizzysmithhair";

// Save for later:
// const BOOK_URL = "https://booksolo.co/draft-5491022563/book/location?directBooking=true";

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-6 py-16 bg-[#EFE9DF]"
    >
      <div className="max-w-md mx-auto text-center">
        <div className="mb-10">
          <MapPin className="w-5 h-5 mx-auto text-[#5D7A63] mb-4" />

          <h2
            className="text-4xl text-[#3E342C]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Find Me
          </h2>

          <div className="w-14 h-px bg-[#5D7A63]/30 mx-auto mt-4" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-[#DDD6CC]"
        >
          <p className="text-sm text-[#7A7268] mb-2">Salon address</p>

          <p className="text-[#3E342C] font-medium leading-relaxed">
            4 Grange Farm,
            <br />
            Cocklehole Road,
            <br />
            Terrington St Clements,
            <br />
            PE34 4HH
          </p>

          <p className="text-sm text-[#7A7268] leading-relaxed mt-5">
            Mobile appointments are also available in selected surrounding areas.
            For enquiries, availability or booking questions, please contact
            Lizzy directly.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="tel:07860370557"
              className="w-full bg-white text-[#3E342C] py-4 rounded-2xl font-medium flex items-center justify-center gap-2 border border-[#DDD6CC]"
            >
              <Phone className="w-5 h-5" />
              Call 07860 370557
            </a>

            <a
              href="https://instagram.com/lizzysmithhair"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#5D7A63] text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-2"
            >
              <Camera className="w-5 h-5" />
              Message on Instagram
            </a>

            <a
              href="https://www.facebook.com/share/14e8ojDRaYA/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-[#3E342C] py-4 rounded-2xl font-medium flex items-center justify-center gap-2 border border-[#DDD6CC]"
            >
              Find on Facebook
            </a>

            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#3E342C] text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Message to Book
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Camera, Calendar } from "lucide-react";

const BOOK_URL = "https://www.instagram.com/direct/t/lizzysmithhair";

// const BOOKSOLO_URL = "https://booksolo.co/draft-5491022563/book/location?directBooking=true";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F3EE]/90 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center justify-between px-5 py-4 max-w-6xl mx-auto">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Lizzy Smith Hairdressing"
              className="w-10 h-10 object-contain"
            />
          </Link>

          <button onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6 text-[#3E342C]" />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#F6F3EE] z-50 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
          <img
            src="/images/logo.png"
            alt="Lizzy Smith Hairdressing"
            className="w-14 h-14 object-contain"
          />

          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6 text-[#3E342C]" />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-6">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-lg text-[#3E342C]"
          >
            Home
          </Link>

          <Link
            to="/prices"
            onClick={() => setOpen(false)}
            className="text-lg text-[#3E342C]"
          >
            Prices
          </Link>

          <Link
            to="/terms"
            onClick={() => setOpen(false)}
            className="text-lg text-[#3E342C]"
          >
            Terms & Conditions
          </Link>

          <a
            href="https://instagram.com/lizzysmithhair"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-[#3E342C]"
          >
            <Camera className="w-5 h-5" />
            Instagram
          </a>

          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 bg-[#5D7A63] text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Message to Book
          </a>
        </nav>
      </aside>
    </>
  );
}
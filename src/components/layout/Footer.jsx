import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2B241F] text-white mt-20 pb-28">
      <div className="px-6 py-14 text-center">
        <img
          src="/images/logo-white.png"
          alt="Lizzy Smith Hairdressing"
          className="w-20 mx-auto mb-6"
        />

        <p className="text-sm opacity-80 mb-2">Kings Lynn, Norfolk</p>

        <p className="text-sm opacity-60 mb-6">
          Mobile & Salon Appointments Available
        </p>

        <a
          href="https://instagram.com/lizzysmithhair"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline"
        >
          @lizzysmithhair
        </a>

        <div className="flex justify-center gap-6 mt-8 text-sm opacity-70">
          <Link to="/prices">Prices</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <p className="text-xs opacity-30 mt-6">
          © {new Date().getFullYear()} Lizzy Smith Hairdressing. Est 2007.
        </p>

        <p className="text-xs opacity-60 mt-3">
          Website created by{" "}
          <a
            href="https://shannonwiseanalytics.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Shannon Wise
          </a>
        </p>
      </div>
    </footer>
  );
}
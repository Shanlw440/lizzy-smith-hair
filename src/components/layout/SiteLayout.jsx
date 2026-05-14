import { Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import BookNowBar from "./BookNowBar";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#F6F3EE] text-[#3E342C]">
      <MobileNav />

      <main>
        <Outlet />
      </main>

      <Footer />
      <BookNowBar />
    </div>
  );
}
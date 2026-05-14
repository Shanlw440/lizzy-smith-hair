import { BrowserRouter, Routes, Route } from "react-router-dom";

import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
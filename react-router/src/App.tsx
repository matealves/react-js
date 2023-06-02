import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AboutItem } from "./pages/AboutItem";
import { AboutMateus } from "./pages/AboutMateus";
import { AboutGabriel } from "./pages/AboutGabriel";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div>
      <div className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          {/* <Route path="/sobre/mateus" element={<AboutMateus />} />
          <Route path="/sobre/gabriel" element={<AboutGabriel />} /> */}
          <Route path="/sobre/:slug" element={<AboutItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

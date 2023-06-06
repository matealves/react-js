import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AboutItem } from "./pages/AboutItem";
import { NotFound } from "./pages/NotFound";
import { RequireAuth } from "./RequireAuth";

function App() {
  return (
    <div>
      <div className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sobre"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          />
          <Route path="/sobre/:slug" element={<AboutItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

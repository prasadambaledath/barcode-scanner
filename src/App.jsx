import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Demo1 from "./pages/Demo1";
import Demo2 from "./pages/Demo2";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/barcode-scanner" element={<Demo1 />} />
          <Route path="/barcode-scanner/demo2" element={<Demo2 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

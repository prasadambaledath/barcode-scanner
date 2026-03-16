import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo1 from "./pages/Demo1";
import Demo2 from "./pages/Demo2";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter basename="/barcode-scanner">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Demo1 />} />
          <Route path="/demo2" element={<Demo2 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

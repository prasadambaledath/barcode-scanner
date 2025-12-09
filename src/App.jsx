import { useState } from "react";
import ScannerModal from "./components/ScannerModal";
import BarCodeImg from "./assets/barcode.png";

function App() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleOpenScanner = (field) => {
    setActiveField(() => field);
    setOpenModal(true);
  };

  const handleScanSuccess = (data) => {
    if (activeField) activeField(data);
    setOpenModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 gap-6 ">
      <h1 className="text-2xl text-black">QR/Barcode Scanner Demo</h1>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg flex flex-col gap-4">
        {/* Field 1 */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="flex-1 border rounded-xl p-2"
            placeholder="Scan for Field 1"
            value={field1}
            onChange={(e) => setField1(e.target.value)}
            name="field1"
          />
          <button
            onClick={() => handleOpenScanner(setField1)}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white"
          >
            <img src={BarCodeImg} alt="BarCodeImg" width={32} />
          </button>
        </div>

        {/* Field 2 */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="flex-1 border rounded-xl p-2"
            placeholder="Scan for Field 2"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
            name="field2"
          />
          <button
            onClick={() => handleOpenScanner(setField2)}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white"
          >
            <img src={BarCodeImg} alt="BarCodeImg" width={32} />
          </button>
        </div>
      </div>

      <ScannerModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onScan={handleScanSuccess}
      />
    </div>
  );
}

export default App;
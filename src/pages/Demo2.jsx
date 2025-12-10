import { useState } from "react";
import ScannerModal2 from "../components/ScannerModal2";
import BarCodeImg from "../assets/barcode.png";

function Demo2() {
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
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 gap-6">
      <h1 className="text-2xl text-gray-800 font-semibold">Demo 2</h1>
      <p className="text-sm text-gray-500 -mt-4">Using 'react-qr-barcode-scanner'</p>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg flex flex-col gap-4">
        {/* Field 1 */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="flex-1 border rounded-xl p-2 bg-white text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
            placeholder="Scan for Field 1"
            value={field1}
            onChange={(e) => setField1(e.target.value)}
            name="field1"
          />
          <button
            onClick={() => handleOpenScanner(setField1)}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <img src={BarCodeImg} alt="Scan" width={32} />
          </button>
        </div>

        {/* Field 2 */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="flex-1 border rounded-xl p-2 bg-white border-gray-300 text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
            placeholder="Scan for Field 2"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
            name="field2"
          />
          <button
            onClick={() => handleOpenScanner(setField2)}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <img src={BarCodeImg} alt="Scan" width={32} />
          </button>
        </div>
      </div>

      <ScannerModal2
        open={openModal}
        onClose={() => setOpenModal(false)}
        onScan={handleScanSuccess}
      />
    </div>
  );
}

export default Demo2;
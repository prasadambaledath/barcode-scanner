import { Scanner } from "@yudiel/react-qr-scanner";

// Scanner Modal using @yudiel/react-qr-scanner
function ScannerModal1({ open, onClose, onScan }) {
  if (!open) return null;

  const handleScan = (detectedCodes) => {
    console.log('Detected codes:', detectedCodes);
    // detectedCodes is an array of IDetectedBarcode objects
    detectedCodes.forEach(code => {
      console.log(`Format: ${code.format}, Value: ${code.rawValue}`);
    });
    onScan(detectedCodes[0].rawValue);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-3 rounded-2xl">
        <h2 className="text-sm font-medium mb-2 text-center text-gray-700">
          Scan QR / Barcode
        </h2>
        <div className="w-full overflow-hidden rounded-xl">
          <Scanner
            onScan={handleScan}
            onError={(error) => console.error(error)}
          />
        </div>
        <button
          onClick={onClose}
          className="w-full mt-3 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-xl transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ScannerModal1;
import BarcodeScanner from "react-qr-barcode-scanner";

// Reusable Scanner Modal Component
function ScannerModal({ open, onClose, onScan }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-3 rounded-2xl shadow-2xl w-72 relative">
        <h2 className="text-sm font-medium mb-2 text-center text-gray-700">
          Scan QR / Barcode
        </h2>
        <div 
          className="w-full overflow-hidden rounded-xl [&>section]:!p-0 [&>section]:!bg-transparent [&_video]:!rounded-xl"
          style={{ aspectRatio: "4/3" }}
        >
          <BarcodeScanner
            onUpdate={(err, result) => {
              if (result) onScan(result.text);
              if (err) {
                console.log(err?.message || "Error while scanning");
              }
            }}
            constraints={{ 
              facingMode: "environment",
              width: { ideal: 640 },
              height: { ideal: 480 }
            }}
            videoStyle={{ 
              width: "100%", 
              height: "100%",
              objectFit: "cover"
            }}
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

export default ScannerModal;
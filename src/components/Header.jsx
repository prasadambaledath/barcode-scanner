import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">
          📷 QR/Barcode Scanner Demo
        </h1>
        <nav className="flex gap-1">
          <NavLink
            to="/barcode-scanner"
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600  whitespace-nowrap">
            Demo 1
          </NavLink>
          <NavLink
            to="/barcode-scanner/demo2"
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 whitespace-nowrap"
          >
            Demo 2
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;


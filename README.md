# 📷 QR/Barcode Scanner

A mobile-optimized React application for scanning QR codes and barcodes using your device's camera.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 📱 **Mobile-optimized** — Compact scanner UI designed for one-handed use
- 🔍 **QR & Barcode support** — Scans both QR codes and traditional barcodes
- 🎯 **Multi-field scanning** — Scan directly into any input field
- ⚡ **Real-time scanning** — Instant detection using device camera
- 🎨 **Clean UI** — Modern, minimal interface with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/barcode-scanner.git
cd barcode-scanner

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📦 Dependencies

- **[react-qr-barcode-scanner](https://www.npmjs.com/package/react-qr-barcode-scanner)** — Camera-based barcode/QR scanning
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** — Next-generation frontend tooling

## 📱 Browser Support

Works on all modern browsers with camera access:
- Chrome/Edge (Desktop & Mobile)
- Safari (iOS 11+)
- Firefox

> ⚠️ **Note:** Camera access requires HTTPS in production. Localhost works without HTTPS during development.

## 📄 License

MIT License — feel free to use this project for personal or commercial purposes.
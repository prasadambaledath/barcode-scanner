import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { registerSW } from 'virtual:pwa-register'
import App from './App'
import './index.css'

// Register service worker and reload when a new version is available
registerSW({
  immediate: true,
  onNeedRefresh: () => {
    console.log('New version available, reloading...');
    window.location.reload();
  }
});

/*
async function fetchConfig() {
  const res = await fetch(`config.json`, { cache: "no-store" });
  const data = await res.json();
  if (data.isBarcodeScannerDemo) {
    localStorage.setItem('isBarcodeScannerDemo', 'true');
  } else {
    localStorage.setItem('isBarcodeScannerDemo', 'false');
  }
}
fetchConfig();
*/

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)

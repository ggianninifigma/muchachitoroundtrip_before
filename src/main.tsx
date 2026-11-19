import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import { initAnalytics } from "./analytics/amplitude";
import "./styles/global.css";

// Initialize Amplitude (autocapture page views + frustration, session replay)
// as early as possible, before the app renders.
initAnalytics();

// Router basename derived from Vite's base path, so the app works both at the
// site root (local dev → "/") and under the GitHub Pages subpath
// (e.g. "/muchachitoroundtrip_before").
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <ToastProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ToastProvider>
  </BrowserRouter>,
);

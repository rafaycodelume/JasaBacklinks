import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Make sure this line exists!

export function AppBootstrap() {
  return <App />;
}

const rootEl = document.getElementById("root");
const app = (
  <React.StrictMode>
    <AppBootstrap />
  </React.StrictMode>
);

// SSR / Prerender fix:
// Agar #root me pehle se prerender wala HTML hai, to usko delete mat karo,
// usi pe chipak jao (hydrate). createRoot delete karke dobara banata hai,
// isliye 1 sec raw HTML flash aata tha.
if (rootEl && rootEl.hasChildNodes()) {
  try {
    hydrateRoot(rootEl, app);
  } catch (e) {
    // Agar hydrate fail ho jaye (content mismatch), to fallback pe createRoot use karo
    console.warn("Hydration failed, falling back to createRoot", e);
    rootEl.innerHTML = "";
    createRoot(rootEl).render(app);
  }
} else {
  createRoot(rootEl).render(app);
}

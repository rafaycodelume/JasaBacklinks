import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.jsx";
import "./index.css"; // Make sure this line exists!

export function AppBootstrap() {
  return (
    <>
      <App />
      <Analytics />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppBootstrap />
  </React.StrictMode>,
);

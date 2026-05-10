import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Index } from "./routes/index";

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>,
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./samples/product-dashboard/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

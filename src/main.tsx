import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import { ACTIVE_SANDBOX } from "./sandbox.config";

const SandboxApp = lazy(() => {
  console.log("Loading sandbox:", ACTIVE_SANDBOX);
  return import(`./sandboxes/${ACTIVE_SANDBOX}/App.tsx`);
});

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div>Loading sandbox...</div>}>
    <SandboxApp />
  </Suspense>
);

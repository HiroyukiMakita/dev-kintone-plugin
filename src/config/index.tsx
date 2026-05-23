import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "./51-modern-default.css";
// @ts-ignore
import "./style.css";
import App from "./App.tsx";

const rootElementId = "kintone-plugin-template-root";
const rootElement = document.getElementById(rootElementId);
if (!rootElement) {
  throw new Error(`root element (#${rootElementId}) not found`);
}

createRoot(rootElement).render(
  <StrictMode>
    <App pluginId={kintone.$PLUGIN_ID} />
  </StrictMode>,
);

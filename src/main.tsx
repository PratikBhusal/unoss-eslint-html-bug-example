import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <p className="text-green bg-black bg-red-400">Hello World from main.tsx</p>
    <div className="mx1 m1 mr-1">Testing</div>
  </StrictMode>,
);

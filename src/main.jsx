import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StateProvider from "./Store/StateProvider.jsx";
import { initialState, reducer } from "./Store/reducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);

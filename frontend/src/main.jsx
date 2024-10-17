import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import store from "./store/configStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <NextUIProvider>
        <App />
      </NextUIProvider>  
    </Provider>
     
  </StrictMode>
);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FormProvider } from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormProvider>
      <Router>
        {" "}
        <App />
      </Router>
    </FormProvider>
  </StrictMode>
);

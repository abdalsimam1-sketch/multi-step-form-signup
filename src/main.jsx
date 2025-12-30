import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FormProvider } from "./Context/Context.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FormProvider>
        <Router>
          {" "}
          <App />
        </Router>
      </FormProvider>
    </AuthProvider>
  </StrictMode>
);

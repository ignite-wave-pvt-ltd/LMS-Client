import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider
      clientId={
        import.meta.env.VITE_GOOGLE_CLIENT_ID ||
        "1010032595345-khdde0p9vlv99kh5f3j8apvv2kk3d9kv.apps.googleusercontent.com"
      }
    >
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);

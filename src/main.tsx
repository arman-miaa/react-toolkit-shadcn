import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import { RouterProvider } from "react-router";
import router from "./routes";

import { ThemeProvider } from "./providers/theme-provider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);

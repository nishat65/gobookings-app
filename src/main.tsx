import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import { RouterProvider } from "react-router";
import router from "./routes";
import PageFallbackSpinner from "./components/shared/PageFallbackSpinner";
import { AlertProvider } from "./utils/context/AlertProvider";
import { CssBaseline } from "@mui/material";
import GoBookingThemeProvider from "./utils/context/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoBookingThemeProvider>
      <CssBaseline />
      <AlertProvider>
        <Suspense fallback={<PageFallbackSpinner />}>
          <RouterProvider router={router} />
        </Suspense>
      </AlertProvider>
    </GoBookingThemeProvider>
  </StrictMode>
);

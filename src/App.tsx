import { CssBaseline } from "@mui/material";
import { Suspense } from "react";
import { RouterProvider } from "react-router";
import router from "./routes";
import { AlertProvider } from "./utils/context/AlertProvider";
import GoBookingThemeProvider from "./utils/context/ThemeProvider";
import PageFallbackSpinner from "./components/shared/PageFallbackSpinner";
import FloatingModeChangeBtn from "./components/shared/FloatingModeChangeBtn";

// console.log(import.meta.env.REACT_APP_DB_PASSWORD);
function App() {
  return (
    <GoBookingThemeProvider>
      <CssBaseline />
      <AlertProvider>
        <Suspense fallback={<PageFallbackSpinner />}>
          <RouterProvider router={router} />
        </Suspense>
        <FloatingModeChangeBtn />
      </AlertProvider>
    </GoBookingThemeProvider>
  );
}

export default App;

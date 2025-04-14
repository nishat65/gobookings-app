import { CssBaseline } from "@mui/material";
import GoBookingThemeProvider from "./utils/context/ThemeProvider";
import SignIn from "./pages/sign-in";
import { AlertProvider } from "./utils/context/AlertProvider";

// console.log(import.meta.env.REACT_APP_DB_PASSWORD);
function App() {
  return (
    <GoBookingThemeProvider>
      <CssBaseline />
      <AlertProvider>
        <SignIn />
      </AlertProvider>
    </GoBookingThemeProvider>
  );
}

export default App;

import DashboardIcon from "@mui/icons-material/Dashboard";
import type { Navigation } from "@toolpad/core";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { Outlet } from "react-router";
import Logo from "./assets/images/house-2492054.svg";

const NAVIGATION: Navigation = [
  {
    title: "Home",
    icon: <DashboardIcon />,
  },
];

const BRANDING = {
  title: "",
  logo: <img src={Logo} alt="gobookings icon" />,
};

// console.log(import.meta.env.REACT_APP_DB_PASSWORD);
function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}

export default App;

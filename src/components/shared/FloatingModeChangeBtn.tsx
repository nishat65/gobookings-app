import ModeNightIcon from "@mui/icons-material/ModeNight";
import SunnyIcon from "@mui/icons-material/Sunny";
import { Fab, useColorScheme, Zoom } from "@mui/material";
import { useState } from "react";

export default function FloatingModeChangeBtn() {
  const [showZoom, setShowZoom] = useState(true);
  const { mode, setMode } = useColorScheme();

  const handleToggleMode = () => {
    setShowZoom(false);
    setTimeout(() => {
      setMode(mode === "dark" ? "light" : "dark");
      setShowZoom(true);
    }, 200);
  };

  return (
    <Zoom
      unmountOnExit
      mountOnEnter
      timeout={500}
      easing="cubic-bezier(0.4, 0, 0.2, 1)"
      in={showZoom}
    >
      <Fab
        sx={{ bottom: 20, position: "absolute", right: 20 }}
        color="primary"
        aria-label="add"
        onClick={handleToggleMode}
      >
        {mode === "dark" ? <ModeNightIcon /> : <SunnyIcon />}
      </Fab>
    </Zoom>
  );
}

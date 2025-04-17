import ArrowBack from "@mui/icons-material/ArrowBack";
import { Box, Fab } from "@mui/material";
import { useNavigate } from "react-router";
import notFound from "../assets/images/404/6325254.jpg";

export default function NotFound() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/sign-in");
  };
  return (
    <Box
      component={"main"}
      sx={{
        height: "100vh",
        backgroundImage: `url(${notFound})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <Fab
        sx={{ position: "absolute", top: 20, left: 20 }}
        onClick={handleBack}
      >
        <ArrowBack />
      </Fab>
    </Box>
  );
}

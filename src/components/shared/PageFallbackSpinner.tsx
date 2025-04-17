import { Box, Card, CardContent, Stack } from "@mui/material";
import { RiseLoader } from "react-spinners";
import Logo from "../../assets/images/house-2492054.svg";

export default function PageFallbackSpinner() {
  return (
    <Box component={"main"} sx={{ height: "100vh" }}>
      <Stack justifyContent={"center"} alignItems={"center"} sx={{ height: 1 }}>
        <Card
          sx={{
            width: "200px",
            height: "200px",
            backgroundImage: `url(${Logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <CardContent sx={{ position: "relative" }}>
            <RiseLoader />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}

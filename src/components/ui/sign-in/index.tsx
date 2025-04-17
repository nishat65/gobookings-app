import { Box, Grid } from "@mui/material";
import homeImage from "../../../assets/images/house-7497001.svg";
import SignInFormCard from "./SignInFormCard";

// email: "user.gobookings5@gmail.com",
//         password: "nishat@65",

export default function SignIn() {
  return (
    <Box
      component={"main"}
      sx={{
        minHeight: "100vh",
        display: "flex",
        width: "100%",
      }}
    >
      <Grid container spacing={0} width={"100%"}>
        <Grid
          size={{ md: 6, lg: 6, xl: 6 }}
          sx={{
            backgroundImage: `url(${homeImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <SignInFormCard />
        </Grid>
      </Grid>
    </Box>
  );
}

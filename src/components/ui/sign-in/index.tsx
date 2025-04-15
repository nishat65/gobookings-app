import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import homeImage from "../../../assets/images/house-7497001.svg";
import { supabase } from "../../../utils/config/supabase";
import { useAlert } from "../../../utils/context/AlertProvider";
import FloatingModeChangeBtn from "../../shared/FloatingModeChangeBtn";
import SocialLoginBtn from "./SocialLoginBtn";
import SignInFormCard from "./SignInFormCard";

// email: "user.gobookings5@gmail.com",
//         password: "nishat@65",

export default function SignIn() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const alert = useAlert();

  async function onSubmit() {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert.error(error.code as string);
        return;
      }
      if (data) {
        console.log("Sign in successful:", data);
        alert.success("Sign in successful");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert.error("Error signing in. Please try again.");
    } finally {
      setLoading(false);
    }
  }
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
      <FloatingModeChangeBtn />
    </Box>
  );
}

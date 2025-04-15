import {
  Box,
  Button,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { supabase } from "../../../utils/config/supabase";
import { useAlert } from "../../../utils/context/AlertProvider";
import SocialLoginBtn from "./SocialLoginBtn";

export default function SignInFormCard() {
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
    <Stack spacing={2} sx={{ p: 10, height: "100%" }} justifyContent={"center"}>
      <Typography
        variant="h4"
        textTransform={"capitalize"}
        color="primary"
        sx={{ textAlign: "center" }}
      >
        Sign In
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Welcome back! Please enter your details.
      </Typography>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        name="email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        name="password"
      />
      <Link component={"a"} sx={{ textAlign: "right", textDecoration: "none" }}>
        Forgot Password
      </Link>
      <Button
        loading={loading}
        sx={{ p: 1.5 }}
        variant="contained"
        onClick={onSubmit}
      >
        Sign In
      </Button>
      <Typography variant="body1">
        Don't have an account?{" "}
        <Link component={"a"} sx={{ textDecoration: "none" }}>
          Sign Up
        </Link>
      </Typography>
      <Box component={"div"} sx={{ position: "relative" }}>
        <Divider />
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: theme.palette.background.default,
            p: 1,
          }}
        >
          OR
        </Typography>
      </Box>
      <Stack spacing={1} justifyContent={"space-between"} alignItems={"center"}>
        <Typography variant="body1">Sign in with</Typography>
        <SocialLoginBtn />
      </Stack>
    </Stack>
  );
}

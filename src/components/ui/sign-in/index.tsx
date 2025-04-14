import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
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
          <Stack
            spacing={2}
            sx={{ p: 10, height: "100%" }}
            justifyContent={"center"}
          >
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
            <Link
              component={"a"}
              sx={{ textAlign: "right", textDecoration: "none" }}
            >
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
            <Stack
              spacing={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="body1">Sign in with</Typography>
              <Stack direction={"row"} spacing={2}>
                <IconButton
                  size="large"
                  color="primary"
                  aria-label="google"
                  sx={{
                    borderColor: theme.palette.primary.main,
                    borderWidth: 1,
                    borderRadius: 2,
                    borderStyle: "solid",
                  }}
                >
                  <GoogleIcon />
                </IconButton>
                <IconButton
                  size="large"
                  color="primary"
                  aria-label="google"
                  sx={{
                    borderColor: theme.palette.primary.main,
                    borderWidth: 1,
                    borderRadius: 2,
                    borderStyle: "solid",
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  size="large"
                  color="primary"
                  aria-label="google"
                  sx={{
                    borderColor: theme.palette.primary.main,
                    borderWidth: 1,
                    borderRadius: 2,
                    borderStyle: "solid",
                  }}
                >
                  <XIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      {/* {success && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          {success}
        </Alert>
      )}
      {error && (
        <Alert icon={<WarningIcon fontSize="inherit" />} severity="error" >
          {error}
        </Alert>
      )} */}
    </Box>
  );
}

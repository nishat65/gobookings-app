import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import { IconButton, Stack, useTheme } from "@mui/material";

export default function SocialLoginBtn() {
  const theme = useTheme();
  return (
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
  );
}

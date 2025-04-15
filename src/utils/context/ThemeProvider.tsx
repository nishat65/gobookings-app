import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#6CAB92",
          contrastText: "#fff",
        },
        text: {
          primary: "#6CAB92",
          secondary: "#fff",
        },
      },
    },
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#6CAB92",
          contrastText: "#fff",
        },
        background: {
          default: "#f5f5f5",
          paper: "#fff",
        },
        text: {
          primary: "#000",
          secondary: "#fff",
        },
      },
    },
  },
});

export default function GoBookingThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme} defaultMode="system">
      {children}
    </ThemeProvider>
  );
}

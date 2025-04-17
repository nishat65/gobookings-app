import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({});

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

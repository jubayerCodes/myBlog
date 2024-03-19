import { useMediaQuery } from "@mui/material";

const usePreferredColorMode = () => {
  // NOTE: Retrieving Theme Color Mode From LocalStorage

  const storedThemeMode = JSON.parse(
    localStorage.getItem("themeColorMode")
  );

  // NOTE: Retrieving Default Theme Color Mode From Computer

  const defaultDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // NOTE: Conditional Calculation for first preferring color mode

  /**
   * If any there is not stored theme mode, it will check and return the default theme mode of users computer
   * Else if there is any stored theme mode, then return the stored theme mode
   */

  const preferredColorMode =
    storedThemeMode === null
      ? defaultDarkMode
        ? "dark"
        : "light"
      : storedThemeMode;
  return preferredColorMode;
};

export default usePreferredColorMode;

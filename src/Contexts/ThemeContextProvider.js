"use client";

import usePreferredColorMode from "@/hooks/usePreferredColorMode";
import { useMediaQuery } from "@mui/material";
import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const preferredColorMode = usePreferredColorMode();

  const [mode, setMode] = useState(preferredColorMode);

  useEffect(() => {
    setMode(preferredColorMode);
  }, [preferredColorMode]);

  const updateThemeMode = (mode) => {
    setMode(mode);

    localStorage.setItem("themeColorMode", JSON.stringify(mode));
  };

  const contextValue = { mode, updateThemeMode };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

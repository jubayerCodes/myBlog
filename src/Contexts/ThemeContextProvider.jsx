'use client'

import { useMediaQuery } from '@mui/material';
import React, { createContext, useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {

    // NOTE: Retrieving Theme Color Mode From LocalStorage

    const storedThemeMode = JSON.parse(window.localStorage.getItem('themeColorMode'))

    // NOTE: Retrieving Default Theme Color Mode From Computer

    const defaultDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

    // NOTE: Conditional Calculation for first preferring color mode

    /**
     * If any there is not stored theme mode, it will check and return the default theme mode of users computer
     * Else if there is any stored theme mode, then return the stored theme mode
     */

    const preferredColorMode = storedThemeMode === null ? (defaultDarkMode ? 'dark' : 'light') : storedThemeMode

    const [mode, setMode] = useState(preferredColorMode)

    useEffect(() => {
        setMode(preferredColorMode)
    }, [preferredColorMode])

    const updateThemeMode = (mode) => {
        setMode(mode)

        window.localStorage.setItem('themeColorMode', JSON.stringify(mode))
    }

    const contextValue = { mode, updateThemeMode }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
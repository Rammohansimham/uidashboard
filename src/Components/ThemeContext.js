// src/contexts/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SideBar1 from './SideBar1';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeConfig = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={themeConfig}>
        {children}
        
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeContextProvider, useTheme };

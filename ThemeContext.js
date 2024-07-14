import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';

const lightTheme = {
  background: '#FFFFFF',
  text: '#000000',
  buttonBackground: '#000000',
  buttonText: '#FFFFFF',
};

const darkTheme = {
  background: '#000000',
  text: '#FFFFFF',
  buttonBackground: '#FFFFFF',
  buttonText: '#000000',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemTheme === 'dark');
  
  // Update theme state based on system theme changes
  useEffect(() => {
    setIsDarkTheme(systemTheme === 'dark');
  }, [systemTheme]);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

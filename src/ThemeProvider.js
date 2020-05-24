import React, { createContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import darkTheme from "./themes/dark";
import lightTheme from "./themes/light";
import { useLocalStorage } from "./useLocalStorage";

export const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useLocalStorage("isDarkTheme", true);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme: dark,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={dark ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

import { createContext } from 'react';

const ThemeContext = createContext({
  dark: false,
  switchLightTheme: () => {},
  switchDarkTheme: () => {},
  switchTheme: () => {},
});

export default ThemeContext;

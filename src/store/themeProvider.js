import ThemeContext from './context';
import { useReducer } from 'react';

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHT':
      return { dark: false };
    case 'DARK':
      return { dark: true };
    case 'TOGGLE':
      return { dark: !state.dark };
    default:
      return state;
  }
};

const ThemeProvider = (props) => {
  const [mode, dispatch] = useReducer(themeReducer, {
    dark: false,
  });

  const switchLightTheme = () => {
    dispatch({ type: 'LIGHT' });
  };
  const switchDarkTheme = () => {
    dispatch({ type: 'DARK' });
  };
  const switchTheme = () => {
    dispatch({ type: 'TOGGLE' });
  };

  const themeContext = {
    dark: mode.dark,
    switchLightTheme,
    switchDarkTheme,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

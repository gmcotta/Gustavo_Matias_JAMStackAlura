import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeModeContext = createContext({});

function ThemeModeProvider({ children }) {
  const [themeMode, setThemeMode] = useState('light');
  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

function useThemeModeProvider() {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('Context must be within an ThemeModeProvider');
  }
  return context;
}

export { ThemeModeProvider, useThemeModeProvider };

ThemeModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

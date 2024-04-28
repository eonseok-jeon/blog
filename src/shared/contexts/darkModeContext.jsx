import { createContext } from 'react';

export const DarkModeContext = createContext({
  isDark: true,
  onChangeMode: () => {},
});

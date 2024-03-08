import { PropsWithChildren, createContext, useEffect } from "react";
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { useColorScheme } from "react-native";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const ThemeContext = createContext({
  isDark: false,
  theme: LightTheme,
});

export const ThemeContextProvider = ( { children }: PropsWithChildren ) => {

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const theme = isDark? DarkTheme : LightTheme;

  useEffect(() => {
    
  
    return () => {
    }
  }, [])
  

  return (
      <PaperProvider theme={ theme }>
        <NavigationContainer theme={ theme }>
          <ThemeContext.Provider value={{
            isDark,
            theme,
          }}>
            { children }
          </ThemeContext.Provider>
        </NavigationContainer>
      </PaperProvider>
  );
}
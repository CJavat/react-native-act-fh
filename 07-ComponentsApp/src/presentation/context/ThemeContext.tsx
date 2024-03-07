import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { ThemeColors, darkColors, lightColors } from "../../config/theme/theme";
import { AppState, Appearance, useColorScheme } from "react-native";

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;

  setTheme: ( theme: ThemeColor ) => void;
}

export const ThemeContext = createContext( {} as ThemeContextProps );

export const ThemeProvider = ( { children }: PropsWithChildren ) => {

  const colorScheme = useColorScheme();


  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  const setTheme = ( theme: ThemeColor ) => {
    setCurrentTheme( theme );
  };

  // useEffect(() => {
  //   if( colorScheme === 'dark' ) {
  //     setCurrentTheme( 'dark' );
  //   } else {
  //     setCurrentTheme( 'light' );
  //   }
  // }, [colorScheme]);

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     const colorScheme = Appearance.getColorScheme();
  //     setCurrentTheme( colorScheme === 'dark' ? 'dark' : 'light' );
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  

  return (
    <ThemeContext.Provider value={{
      currentTheme: currentTheme,
      colors: ( currentTheme === 'light' ) ? lightColors : darkColors,
      setTheme: setTheme
    }}>
      { children }
    </ThemeContext.Provider>
  );
}
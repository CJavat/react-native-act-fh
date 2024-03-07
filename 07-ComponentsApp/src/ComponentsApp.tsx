import 'react-native-gesture-handler';
import { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigator/Navigator';
import { ThemeProvider } from './presentation/context/ThemeContext';

const AppState = ( { children }: PropsWithChildren ) => (
    <NavigationContainer>
      <ThemeProvider>
        { children }
      </ThemeProvider>
    </NavigationContainer>
)

const ComponentsApp = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  )
}

export default ComponentsApp
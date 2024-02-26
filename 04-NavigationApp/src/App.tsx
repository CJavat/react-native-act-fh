import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
// import { BottomTabNavigator } from './presentation/routes/BottomTabsNavigator';
// import { StackNavigator } from './presentation/routes/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  )
}

export default App
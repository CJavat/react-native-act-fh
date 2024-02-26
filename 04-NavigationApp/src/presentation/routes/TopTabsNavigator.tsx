import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import { IonIcon } from '../components/shared/IonIcon';
import { globalColors } from '../theme/theme';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: globalColors.primary,
          tabBarIndicatorStyle: { backgroundColor: globalColors.primary }
        }}
        
      >
        <Tab.Screen options={{ tabBarIcon: ({color}) => ( <IonIcon color={ color } name='camera-outline' /> ) }} name="Home" component={ ProfileScreen } />
        <Tab.Screen options={{ tabBarIcon: ({color}) => ( <IonIcon color={ color } name='grid-outline' /> ) }} name="About" component={ AboutScreen } />
      </Tab.Navigator>
    </>
  );
}
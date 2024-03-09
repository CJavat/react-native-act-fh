import { PropsWithChildren, useEffect } from "react"
import { AppState } from "react-native"
import { usePermissionStore } from "../stores/permissions/usePermissionStore";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigation/StackNavigator";

export const PermissionsChecker = ( { children }: PropsWithChildren ) => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const { locationStatus, checkLocationPermission } = usePermissionStore();

  useEffect(() => {
    if( locationStatus === 'granted' ) {
      navigation.reset({
        routes: [{ name: 'MapScreen' }],
      });
    } else if( locationStatus !== 'undetermined' ) {
      navigation.reset({
        routes: [{ name: 'PermissionsScreen' }],
      });
    }
  }, [ locationStatus ])
  

  useEffect(() => {
    checkLocationPermission();
  }, []);
  

  useEffect(() => {
    const subscription = AppState.addEventListener('change', ( nextAppState) => {
      checkLocationPermission();
    });
  
    return () => {
      subscription.remove();
    }
  }, []);
  


  return (
    <>
      { children }
    </>
  )
}

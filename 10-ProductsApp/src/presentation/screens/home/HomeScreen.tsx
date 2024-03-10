import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import { useAuthStore } from '../../store/auth/useAuthStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/StackNavigator';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';

export const HomeScreen = () => {
  const navigate = useNavigation<NavigationProp<RootStackParams>>();
  const { logout } = useAuthStore();
  getProductsByPage(0);

  const onLogOut = () => {

    logout();
    navigate.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    });

  };
  
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen</Text>
      
      <Button 
        accessoryLeft={ <Icon name='log-out-outline' /> }
        onPress={ onLogOut }
      >
        Cerrar Sesión
      </Button>
    </Layout>
  )
}

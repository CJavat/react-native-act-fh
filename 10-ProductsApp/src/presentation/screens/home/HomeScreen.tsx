import { Text } from '@ui-kitten/components';
import { useAuthStore } from '../../store/auth/useAuthStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/StackNavigator';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { useQuery } from '@tanstack/react-query';
import { MainLayout } from '../../layouts/MainLayout';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { ProductList } from '../../components/products/ProductList';

export const HomeScreen = () => {
  const navigate = useNavigation<NavigationProp<RootStackParams>>();
  const { logout } = useAuthStore();

  const { isLoading, data: products = [] } = useQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60, // 1 hour
    queryFn: () => getProductsByPage(0),
  });

  const onLogOut = () => {

    logout();
    navigate.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    });

  };
  
  return (
    <MainLayout
      title='TesloShop - Products'
      subTitle='Aplicación Administrativa'
    >
      {
        isLoading
          ? <FullScreenLoader />
          : <ProductList products={ products } />
      }
    </MainLayout>
  )
}

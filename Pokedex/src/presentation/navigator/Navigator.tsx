import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens/search/SearchScreen';
import { PokemonScreen } from '../screens/pokemon/PokemonScreen';
import { HomeScreen } from '../screens/home/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { pokemonId: number };
  SearchScreen: undefined;
}

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="PokemonScreen" component={ PokemonScreen } />
      <Stack.Screen name="SearchScreen" component={ SearchScreen } />
    </Stack.Navigator>
  );
}
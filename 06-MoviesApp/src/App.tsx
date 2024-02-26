import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigation/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}

export default App
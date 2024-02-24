import { SafeAreaView, Text, View } from 'react-native'
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';

import IonIcon from 'react-native-vector-icons/Ionicons';
import { HomeWorkSceen } from './src/presentation/screens/HomeWorkSceen';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon { ...props } />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWordldPage name='Javat Plascencia' /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        <HomeWorkSceen />
      </SafeAreaView>
    </PaperProvider>
  )
}

export default App
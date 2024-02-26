import { Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store';
import { useCounterStore } from '../../store/counter-store';

export const HomeScreen = () => {

  const counter = useCounterStore( state => state.counter );
  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ name }</Text>
      <Text style={ styles.title }>{ email }</Text>

      <Text style={{ fontSize: 20, color: '#000' }}>
        Counter: { counter }
      </Text>
    </View>
  )
}

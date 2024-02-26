import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useCounterStore } from '../../store/counter-store'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

export const SettingsScreen = () => {

  const navigation = useNavigation();

  const counter = useCounterStore( state => state.counter);
  const incrementCounter = useCounterStore( state => state.incrementCounter);
  const decrementCounter = useCounterStore( state => state.decrementCounter);

  useEffect(() => {
    navigation.setOptions({
      title: `Contador: ${counter}`
    });
  }, [counter]);
  

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Count: { counter }</Text>

      <Pressable
        style={ styles.primaryButton }
        onPress={ () => decrementCounter( -1 ) }
      >
        <Text>-1</Text>
      </Pressable>

      <Pressable
        style={ styles.primaryButton }
        onPress={ () => incrementCounter( +1 ) }
      >
        <Text>+1</Text>
      </Pressable>
    </View>
  )
}

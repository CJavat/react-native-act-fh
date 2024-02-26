import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store'

export const ProfileScreen = () => {

  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );
  const changeProfile = useProfileStore( state => state.changeProfile );


  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ name }</Text>
      <Text style={ styles.title }>{ email }</Text>

      <Pressable
        style={ styles.primaryButton }
        onPress={ () => useProfileStore.setState({ name: 'Javato '}) }
      >
        <Text>Cambiar Nombre</Text>
      </Pressable>

      <Pressable
        style={ styles.primaryButton }
        onPress={ () => useProfileStore.setState({ email: 'javato@gmail.com'}) }
      >
        <Text>Cambiar Email</Text>
      </Pressable>

      <Pressable
        style={ styles.primaryButton }
        onPress={ () => changeProfile( 'John Doe', 'john.doe@gmail.com' ) }
      >
        <Text>Regresar a John Doe</Text>
      </Pressable>
    </View>
  )
}

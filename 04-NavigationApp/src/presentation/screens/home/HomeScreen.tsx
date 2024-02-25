import { useEffect } from 'react'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'
import { Pressable, Text, View } from 'react-native'
import { RootStackParams } from '../../routes/StackNavigator'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { globalStyles } from '../../theme/theme'

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }>
          <Text>Menu</Text>
        </Pressable>
      )
    })
  }, [])
  

  return (
    <View style={ globalStyles.container }>
      <PrimaryButton 
        label='Products'
        onPress={ () => navigation.navigate("Products") }
      />

      <PrimaryButton 
        label='Settings'
        onPress={ () => navigation.navigate("Settings") }
      />
    </View>
  )
}

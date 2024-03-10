import { Button, Input, Layout, Text } from "@ui-kitten/components"
import { useWindowDimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { MyIcon } from "../../components/ui/MyIcon";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator";

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {};

export const RegisterScreen = ( { navigation }: Props ) => {

  const { height } = useWindowDimensions();

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>

      <Layout style={{ paddingTop: height * 0.30 }}>
        <Text category="h1">Crear Cuenta</Text>
        <Text category="p2">Por favor, crea una cuenta para continuar</Text>
      </Layout>

      {/* Inputs */}
      <Layout style={{ marginTop: 20 }}>
        <Input 
          placeholder="Nombre Completo"
          accessoryLeft={ <MyIcon name="person-outline" /> }
          style={{ marginBottom: 10 }}
        />

        <Input 
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          accessoryLeft={ <MyIcon name="email-outline" /> }
          style={{ marginBottom: 10 }}
        />

        <Input 
          placeholder="Contraseña"
          autoCapitalize="none"
          accessoryLeft={ <MyIcon name="lock-outline" /> }
          secureTextEntry
          style={{ marginBottom: 20 }}
        />
      </Layout>

      {/* Space */}
      <Layout style={{ height: 20 }} />

      <Layout>
        <Button
          onPress={ () => {} }
          accessoryRight={ <MyIcon name="arrow-forward-outline" white /> }
        >
          Crear
        </Button>
      </Layout>

      {/* Información para crear cuenta */}
      <Layout style={{ height: 50 }} />

      <Layout style={{ alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center' }}>
        <Text>Ya tienes cuenta?, </Text>
        <Text 
          status="primary" 
          category="s1"
          onPress={ () => navigation.goBack() }
        > 
          Ingresar
        </Text>
      </Layout>


      </ScrollView>
    </Layout>
  )
}

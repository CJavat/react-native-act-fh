import { Button, Input, Layout, Text } from "@ui-kitten/components"
import { Alert, useWindowDimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { MyIcon } from "../../components/ui/MyIcon";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator";
import { useAuthStore } from "../../store/auth/useAuthStore";
import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {};

export const RegisterScreen = ( { navigation }: Props ) => {
  const { signUp } = useAuthStore();
  const [isPosting, setIsPosting] = useState( false );
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const { height } = useWindowDimensions();

  const onSignUp = async () => {
    if( form.fullName.length === 0 || form.email.length === 0 || form.password.length === 0 ) {
      Alert.alert('Error', 'Nombre, Usuario y contraseña son obligatorios');
      return;
    }
    
    setIsPosting( true );
    const wasSuccessful = await signUp( form.email, form.email, form.password );
    setIsPosting( false );

    if( wasSuccessful ) {
      Alert.alert('Cuenta Creada', 'Cuenta Creada Correctamente');

      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'LoginScreen',
          },
        ],
      });
    }

  };

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
          value={ form.fullName }
          onChangeText={ ( fullName ) => setForm({ ...form, fullName }) }
          style={{ marginBottom: 10 }}
        />

        <Input 
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          accessoryLeft={ <MyIcon name="email-outline" /> }
          value={ form.email }
          onChangeText={ ( email ) => setForm({ ...form, email }) }
          style={{ marginBottom: 10 }}
        />

        <Input 
          placeholder="Contraseña"
          autoCapitalize="none"
          accessoryLeft={ <MyIcon name="lock-outline" /> }
          value={ form.password }
          onChangeText={ ( password ) => setForm({ ...form, password }) }
          secureTextEntry
          style={{ marginBottom: 20 }}
        />
      </Layout>

      {/* Space */}
      <Layout style={{ height: 20 }} />

      <Layout>
        <Button
          disabled={ isPosting }
          onPress={ onSignUp }
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

import { Alert, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { globalStyles } from "../../../config/theme/theme"
import { Button } from "../../components/ui/Button"
import { showPropmt } from "../../../config/adatpters/prompt.adapter"

export const AlertScreen = () => {

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]
  );

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ], {
      cancelable: true,
      onDismiss: () => console.log('Alert Dismissed'),
    }
  );

  const onShowPropmt = () => {
    //! Código Nativo
    // Alert.prompt(
    //   'Correo Electrónico',
    //   'Incididunt minim quis culpa excepteur velit cupidatat aute.',
    //   ( valor: string ) => console.log({valor}),
    //   'secure-text',
    //   'Soy el valor por defecto',
    //   'number-pad'
    // );

    showPropmt({
      title: 'Lorem Ipsum',
      subTitle: 'Cillum officia est nisi eiusmod elit duis enim eu anim consectetur do ut aliqua quis.',
      buttons: [
        { text: 'Ok', onPress: () => console.log('ok') },
      ],
      placeholder: 'Placeholder'
    });
  
  }



  return (
    <CustomView styles={ globalStyles.globalMargin }>
      <Title text="Alertas" safe />

      <Button 
        onPress={ createTwoButtonAlert }
        text="Alerta - 2 Botones"
      />

      <View style={{ height: 10 }} />
      
      <Button 
        onPress={ createThreeButtonAlert }
        text="Alerta - 3 Botones"
      />

      <View style={{ height: 10 }} />

      <Button 
        onPress={ onShowPropmt }
        text="Propmt - Input"
      />
    </CustomView>
  )
}

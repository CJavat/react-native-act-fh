import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { globalStyles } from "../../../config/theme/theme"
import { Card } from "../../components/ui/Card"
import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const TextInputScreen = () => {
  const { colors } = useContext( ThemeContext );

  const [form, setform] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
    >
      <ScrollView>
        <CustomView margin>
          <Title safe text="TextInputScreen" />

          <Card>
            <TextInput 
              style={[ globalStyles.input, { color: colors.text, borderColor: colors.text } ]}
              placeholderTextColor={ colors.text }
              placeholder="Nombre Completo"
              autoCapitalize="words"
              autoCorrect={ false }
              onChangeText={ value => setform({ ...form, name: value }) }
            />

            <TextInput 
              style={[ globalStyles.input, { color: colors.text, borderColor: colors.text } ]}
              placeholderTextColor={ colors.text }
              placeholder="Correo Electrónico"
              autoCapitalize="none"
              autoCorrect={ false }
              keyboardType="email-address"
              onChangeText={ value => setform({ ...form, email: value }) }
            />

            <TextInput 
              style={[ globalStyles.input, { color: colors.text, borderColor: colors.text } ]}
              placeholderTextColor={ colors.text }
              placeholder="Correo Electrónico"
              keyboardType="phone-pad"
              onChangeText={ value => setform({ ...form, phone: value }) }
            />
          </Card>

          <View style={{ height: 10 }} />

          <Card>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
            <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
          </Card>
        </CustomView>

        <View style={{ height: 20 }} />

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

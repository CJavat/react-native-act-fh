import { StyleProp, Text, View, ViewStyle } from "react-native"
import { globalStyles } from "../../../config/theme/theme"

interface Props {
  styles?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export const CustomView = ( { children, styles }: Props ) => {
  return (
    <View style={[ globalStyles.mainContainer, styles ]}>
      { children }
    </View>
  )
}

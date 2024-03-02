import { StyleProp, Text, View, ViewStyle } from "react-native"
import { globalStyles } from "../../../config/theme/theme"

interface Props {
  styles?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  margin?: boolean;
}

export const CustomView = ( { children, styles, margin = false }: Props ) => {
  return (
    <View style={[ 
      globalStyles.mainContainer, 
      margin ? globalStyles.globalMargin : null,
      styles 
    ]}>
      { children }
    </View>
  )
}

import { StyleProp, Text, View, ViewStyle } from "react-native"
import { colors } from "../../../config/theme/theme";

interface Props {
  styles?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export const Card = ( { styles, children }: Props ) => {
  return (
    <View style={[
      {
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 10,
      },
      styles,
    ]}>
      { children }
    </View>
  )
}

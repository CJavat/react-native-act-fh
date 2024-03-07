import { StyleProp, Text, View, ViewStyle } from "react-native"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
  styles?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export const Card = ( { styles, children }: Props ) => {

  const { colors } = useContext( ThemeContext );

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

import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, styles } from '../../config/themes/app-theme'

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ( { label, color = colors.darkGray, blackText = false, doubleSize = false, onPress }: Props ) => {
  return (
    <Pressable 
      style={ ({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        width: doubleSize ? "40%" : 80,
        opacity: (pressed) ? 0.8 : 1,
      })}
      onPress={ () => onPress() }
    >
      <Text style={{
        ...styles.buttonText,
        color: blackText ? 'black' : 'white',
      }}>{ label }</Text>
    </Pressable>
  )
}

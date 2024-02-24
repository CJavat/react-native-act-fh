import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, styles } from '../../config/themes/app-theme'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {

  const { 
    number,
    prevNumber,
    buildNumber, 
    toggleSign, 
    clean, 
    deleteOperation, 
    btnDivide,
    btnMultiply,
    btnSubstract,
    btnAdd,
    calculateResult,
  } = useCalculator();

  return (
    <View style={ styles.calculatorContainer }>
      
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text 
          style={ styles.mainResult }
          adjustsFontSizeToFit
          numberOfLines={1}
          >
            { number }
        </Text>
        <Text 
          style={ styles.subResult }
          adjustsFontSizeToFit
          numberOfLines={1}
        >
            { ( prevNumber === '0' ) ? ' ' : prevNumber }
        </Text>
      </View>

      <View style={ styles.row }>
        <CalculatorButton onPress={ clean } blackText label='C' color={ colors.lightGray } />
        <CalculatorButton onPress={ toggleSign } blackText label='+/-' color={ colors.lightGray } />
        <CalculatorButton onPress={ deleteOperation } blackText label     ='del' color={ colors.lightGray } />
        <CalculatorButton onPress={ btnDivide } label='÷' color={ colors.orange } />

        <CalculatorButton onPress={ () => buildNumber("7") } label='7' color={ colors.lightGray } />
        <CalculatorButton onPress={ () => buildNumber("8") } label='8' color={ colors.lightGray } />
        <CalculatorButton onPress={ () => buildNumber("9") } label='9' color={ colors.lightGray } />
        <CalculatorButton onPress={ btnMultiply } label='X' color={ colors.orange } />
        
        <CalculatorButton onPress={ () => buildNumber("4") } label='4' color={ colors.lightGray } />
        <CalculatorButton onPress={ () => buildNumber("5") } label='5' color={ colors.lightGray } />
        <CalculatorButton onPress={ () => buildNumber("6") } label='6' color={ colors.lightGray } />
        <CalculatorButton onPress={ btnSubstract } label='-' color={ colors.orange } />

        <CalculatorButton onPress={ () => buildNumber("1") } label='1' color={ colors.lightGray } />
        <CalculatorButton onPress={ () => buildNumber("2") } label='2' color={ colors.lightGray } />
        <CalculatorButton onPress={ () => buildNumber("3") } label='3' color={ colors.lightGray } />
        <CalculatorButton onPress={ btnAdd } label='+' color={ colors.orange } />

        <CalculatorButton onPress={ () => buildNumber("0") } label='0' color={ colors.lightGray } doubleSize />
        <CalculatorButton onPress={ () => buildNumber(".") } label='.' color={ colors.lightGray } />
        <CalculatorButton onPress={ calculateResult } label='=' color={ colors.orange } />
      </View>

    </View>
  )
}


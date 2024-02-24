import React from 'react'
import { StyleSheet, View } from 'react-native'

export const HomeWorkSceen = () => {
  return (
    <View style={ styles.container }>
      <View style={[ styles.box, styles.purpleBox ]} />
      <View style={[ styles.box, styles.orangeBox ]} />
      <View style={[ styles.box, styles.blueBox ]} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'stretch'
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    // alignSelf: 'center'
    // flex: 1,
    // width: '100%'
    // height: '100%'
    top: 100
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    // flex: 1,
    // width: '100%',
    // height: '100%'
    alignSelf: 'flex-end'
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    // flex: 2,
    // height: '100%'
    // width: '100%'
    // alignSelf: 'flex-end'

  },
});
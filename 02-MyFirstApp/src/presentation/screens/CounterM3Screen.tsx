import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { FAB } from 'react-native-paper';
import { globalStyles } from '../theme/global.styles';

import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={ globalStyles.centerContainer }>
      <Text style={ globalStyles.title }>{ count }</Text>

      <FAB
        // label='+1'
        icon='add-outline'
        style={ globalStyles.fab }
        onPress={ ( () => setCount( count + 1 ) )}
        onLongPress={ () => setCount( 0 ) }
      />
    </View>
  )
}

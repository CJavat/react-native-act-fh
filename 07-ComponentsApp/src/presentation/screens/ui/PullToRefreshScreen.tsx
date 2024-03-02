import { RefreshControl, ScrollView, Text, View } from "react-native"
import { Title } from "../../components/ui/Title"
import { CustomView } from "../../components/ui/CustomView"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useState } from "react"
import { colors, globalStyles } from "../../../config/theme/theme"

export const PullToRefreshScreen = () => {

  const [isRefresing, setIsRefresing] = useState( false );

  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefresing( true );
    setTimeout( () => setIsRefresing( false ), 4000 );
  };

  return (
    <ScrollView
      refreshControl={ 
        <RefreshControl 
          refreshing={ isRefresing } 
          progressViewOffset={ top } 
          onRefresh={ onRefresh }
          colors={[ colors.primary, 'red', 'orange', 'green' ]}
        /> 
      }
      style={[ globalStyles.mainContainer, globalStyles.globalMargin ]}
    >
      <Title text="Pull To Refresh" safe />
    </ScrollView>
  )
}

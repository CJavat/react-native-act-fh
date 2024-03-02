import { useState } from "react"
import { ActivityIndicator, Image, Text, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../../../config/theme/theme";
import { FadeInImage } from "../../components/ui/FadeInImage";

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i );

    setTimeout(() => {
      setNumbers([ ...numbers, ...newArray]);
    }, 3000);
  }

  return (
    <View style={{ backgroundColor: 'black' }}>
      <FlatList 
        data={ numbers }
        renderItem={ ({item}) => (
          <ListItem number={ item } />
        ) }
        onEndReachedThreshold={ 0.6 }
        onEndReached={ loadMore }
        keyExtractor={ (item) => item.toString() }
        ListFooterComponent={ () => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={ 40 } color={ colors.primary } />
          </View>
        )}
      />
    </View>
  )
}

interface ListItemProps {
  number: number;
}

const ListItem = ( { number }: ListItemProps ) => {
  return (
    // <Image 
    //   source={{ uri: `https://picsum.photos/id/${ number }/500/400` }}
    //   style={{ width: '100%', height: 400 }}
    // />
    <FadeInImage 
      uri={ `https://picsum.photos/id/${ number }/500/400` }
      style={{ width: '100%', height: 400 }}
    />
  )
};
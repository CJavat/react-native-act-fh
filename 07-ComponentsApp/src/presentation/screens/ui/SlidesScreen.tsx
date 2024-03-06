import { FlatList, Image, ImageSourcePropType, Text, View, useWindowDimensions } from "react-native"
import { colors, globalStyles } from '../../../config/theme/theme';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Title 1",
    desc: "Description 1",
    img: require("../../assets/slide-1.png"),
  },
  {
    title: "Title 2",
    desc: "Description 2",
    img: require("../../assets/slide-2.png"),
  },
  {
    title: "Title 3",
    desc: "Description 3",
    img: require("../../assets/slide-3.png"),
  },
];

export const SlidesScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background,
    }}>
      <FlatList 
        data={ items }
        keyExtractor={ (item) => item.title.toString() }
        renderItem={ ({item}) => <SlideItem item={ item } /> }
        horizontal
        pagingEnabled
        // decelerationRate={ "fast" }
        scrollEnabled={ false }
      />
    </View>
  )
}

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ( { item }: SlideItemProps ) => {

  const { width } = useWindowDimensions();

  const { desc, img, title } = item;

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 40, 
      justifyContent: "center",
      width,
    }}>
      <Image 
        source={ img }
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "center",
          alignSelf: "center",
        }}
      />

      <Text style={[
        globalStyles.title,
        { color: colors.primary }
      ]}>
        { title }
      </Text>

      <Text style={{
        color: colors.text,
        marginTop: 20, 
      }}>
        { desc }
      </Text>
    </View>
  )
}
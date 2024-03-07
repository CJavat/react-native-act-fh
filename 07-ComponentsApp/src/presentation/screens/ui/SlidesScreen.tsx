import { FlatList, Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, Text, View, useWindowDimensions } from "react-native"
import { colors, globalStyles } from '../../../config/theme/theme';
import { Button } from "../../components/ui/Button";
import { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

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

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>( null );
  const navigate = useNavigation();

  const onScroll = ( event: NativeSyntheticEvent<NativeScrollEvent> ) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor( contentOffset.x / layoutMeasurement.width );

    setCurrentSlideIndex( currentIndex > 0 ? currentIndex : 0 );
  };

  const scrollToSlide = ( index: number ) => {
    if( !flatListRef.current ) return;

    flatListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background,
    }}>
      <FlatList 
        ref={ flatListRef }
        data={ items }
        keyExtractor={ (item) => item.title.toString() }
        renderItem={ ({item}) => <SlideItem item={ item } /> }
        horizontal
        pagingEnabled
        // decelerationRate={ "fast" }
        scrollEnabled={ false }
        onScroll={ onScroll }
      />

      {
        currentSlideIndex === items.length - 1
          ? (
            <Button 
              text="Finalizar"
              styles={{ position: "absolute", bottom: 60, right: 30, width: 100 }}
              onPress={ () => navigate.goBack() }
            />
          )
          : (
            <Button 
              text="Siguiente"
              styles={{ position: "absolute", bottom: 60, right: 30, width: 100 }}
              onPress={ () => scrollToSlide( currentSlideIndex + 1 ) }
            />
          )
      }
      

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
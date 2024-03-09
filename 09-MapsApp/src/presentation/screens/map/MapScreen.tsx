import { StyleSheet, View } from 'react-native';
import { Map } from '../../components/maps/Map';
import { useLocationStore } from '../../stores/location/useLocationStore';
import { LoadingScreen } from '../loading/LoadingScreen';
import { useEffect } from 'react';

export const MapScreen = () => {
  const { lastUnknownLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if( lastUnknownLocation === null ) {
      getLocation();
    }
  }, [])
  

  if( lastUnknownLocation === null ) return <LoadingScreen />;

  return (
    <View style={styles.container}>
      <Map initialLocation={ lastUnknownLocation } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
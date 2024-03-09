import { Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps"
import { Location } from "../../../infrastructure/interfaces/location";
import { FAB } from '../ui/FAB';
import { useEffect, useRef, useState } from 'react';
import { useLocationStore } from '../../stores/location/useLocationStore';
import Geolocation from '@react-native-community/geolocation';

interface Props {
  showUserLocation?: boolean;
  initialLocation: Location;
}

export const Map = ( { showUserLocation = true, initialLocation }: Props ) => {

  const mapRef = useRef<MapView>();
  const cameraLocation = useRef<Location>( initialLocation );
  const [isFollowingUser, setisFollowingUser] = useState(true);

  const { getLocation, lastUnknownLocation, watchLocation, clearWatchLocation, userLocationList } = useLocationStore();

  const moveCameraToLocation = ( location: Location ) => {
    if( !mapRef.current ) return;

    mapRef.current.animateCamera({ center: location });

  }

  const moveToCurrentLocation = async () => {
    const location = await getLocation();
    if( !location ) return;

    moveCameraToLocation( location );
  };

  useEffect(() => {
    watchLocation();
  
    return () => {
      clearWatchLocation();
    }
  }, []);

  useEffect(() => {
    if( lastUnknownLocation && isFollowingUser ) moveCameraToLocation( lastUnknownLocation );
  }, [ lastUnknownLocation, isFollowingUser ]);
  
  

  return (
    <>
      <MapView
        ref={ (map) => mapRef.current = map! }
        showsUserLocation={ showUserLocation }
        provider={ Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE }
        style={{ flex: 1 }}
        onTouchStart={ () => setisFollowingUser( false ) }
        region={{
          latitude: cameraLocation.current.latitude,
          longitude: cameraLocation.current.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Polyline 
          coordinates={ userLocationList }
          strokeColor='black'
          strokeWidth={5}
        />
      </MapView>

      <FAB 
        iconName={ isFollowingUser ? 'walk-outline' : 'accessibility-outline' }
        onPress={ () => setisFollowingUser( !isFollowingUser ) }
        style={{ bottom: 80, right: 20 }}
      />

      <FAB 
        iconName='compass-outline'
        onPress={ moveToCurrentLocation }
        style={{ bottom: 20, right: 20 }}
      />
    </>
  )
}


export const clearWatchLocation = ( watchId: number ) => {
  Geolocation.clearWatch( watchId );
};
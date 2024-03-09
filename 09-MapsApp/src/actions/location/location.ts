import Geolocation from '@react-native-community/geolocation';
import { Location } from '../../infrastructure/interfaces/location';

export const getCurrrentLocation = async (): Promise<Location> => {

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition( (info) => {
      resolve({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude
      });
    }, (error) => {
      console.log(error);
      reject(error);
    }, {
      enableHighAccuracy: true,
    });
  });
}

export const watchCurrentLocation = ( locationCallback: ( location: Location ) => void ): number => {
  return Geolocation.watchPosition( info => (
    locationCallback({
      latitude: info.coords.lattitude,
      longitude: info.coords.longitude,
    })
  ), error => {
    throw new Error(`Can't get watchPosition`);
  }, {
    enableHighAccuracy: true,
  } );
};
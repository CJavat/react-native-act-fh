import axios from 'axios';
import { STAGE, API_URL as PROD_URL, API_URL_IOS, API_URL_ANDROID } from '@env';
import { Platform } from 'react-native';
import { StorageAdapter } from '../adapters/storage-adapter';

export const API_URL = ( STAGE === 'production' )
  ? PROD_URL
  : Platform.OS === 'ios' 
    ? API_URL_IOS
    : API_URL_ANDROID

const tesloApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',

  }
});

//? Interceptor
tesloApi.interceptors.request.use(
  async ( config ) => {
    const token = await StorageAdapter.getItem('token');
    if( token ) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  }
);

export {
  tesloApi,
}
import { create } from "zustand";
import { User } from "../../../domain/entities/user";
import { AuthStatus } from "../../../infrastructure/interfaces/auth.status";
import { authCheckStatus, authLogin } from "../../../actions/auth/auth";
import { StorageAdapter } from "../../../config/adapters/storage-adapter";
import { tesloApi } from "../../../config/api/tesloApi";
import { AuthResponse } from "../../../infrastructure/interfaces/auth.response";


export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: ( email: string, password: string ) => Promise<boolean>;
  signUp: ( fullName: string, email: string, password: string ) => Promise<boolean>
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()( (set, get) => ({
  status: 'checking',
  token: undefined,
  user: undefined,

  login: async ( email: string, password: string ) => {
    const resp = await authLogin( email, password );
    if( !resp ) {
      set({ status: 'unauthenticated', token: undefined, user: undefined });
      return false;
    }

    await StorageAdapter.setItem( 'token', resp.token );

    set({ status: 'authenticated', token: resp.token, user: resp.user });
    return true;
  },

  signUp: async ( fullName: string, email: string, password: string ) => {
    try {
      await tesloApi.post<AuthResponse>('/auth/register', { fullName, email, password });
      return true;
    } catch (error) {
      console.log( error );
      return false;
    }

  },

  checkStatus: async () => {
    const resp = await authCheckStatus();
    if( !resp ) {
      set({ status: 'unauthenticated', token: undefined, user: undefined });
    }

    const token= await StorageAdapter.setItem( 'token', resp!.token );
    // console.log({ token });
    set({ status: 'authenticated', token: resp!.token, user: resp!.user });
  },

  logout: async () => {
    try {
      await StorageAdapter.removeItem('token');
      set({ status: 'unauthenticated', token: undefined, user: undefined });
    } catch (error) {
      console.log( error );
      throw new Error(`Error removing token`);
    }
  }

}));
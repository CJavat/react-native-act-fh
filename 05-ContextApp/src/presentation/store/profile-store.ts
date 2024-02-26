import { create } from "zustand";

export interface ProfileStore {
  name: string;
  email: string;


  // Methods
  changeProfile: ( name: string, email: string ) => void;

}


export const useProfileStore = create<ProfileStore>()( (set) => ({
  name: 'John Doe',
  email: "john.doe@gmail.com",

  changeProfile: ( name: string, email: string ) => {
    set({ name, email });
  }

}) );


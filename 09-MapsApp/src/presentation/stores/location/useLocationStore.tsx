import { create } from "zustand";
import { Location } from "../../../infrastructure/interfaces/location";
import { getCurrrentLocation, watchCurrentLocation } from "../../../actions/location/location";
import { clearWatchLocation } from "../../components/maps/Map";

interface LocationState {
  lastUnknownLocation: Location | null;
  userLocationList: Location[];
  watchId: number | null;

  getLocation: () => Promise<Location | null>;
  watchLocation: () => void;
  clearWatchLocation: () => void;
}



export const useLocationStore = create<LocationState>()( (set, get) => ({
  lastUnknownLocation: null,
  userLocationList: [],
  watchId: null,

  getLocation: async () => {
      const location = await getCurrrentLocation();
      set({ lastUnknownLocation: location });
      return location;
  },

  watchLocation: () => {
    const watchId = get().watchId;
    if( watchId !== null ) get().clearWatchLocation();

    const id = watchCurrentLocation( ( location ) => {
      set({
        lastUnknownLocation: location,
        userLocationList: [ ...get().userLocationList, location ]
      })
    })

    set({ watchId: id });
  },

  clearWatchLocation: () => {
    const watchId = get().watchId;
    if( watchId !== null ) clearWatchLocation( watchId );
  }
}));
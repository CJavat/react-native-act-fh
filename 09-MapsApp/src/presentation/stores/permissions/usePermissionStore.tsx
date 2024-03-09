import { create } from "zustand";
import { PermissionStatus } from "../../../infrastructure/interfaces/permissions";
import { checkLocationPermissions, requestLocationPermission } from "../../../actions/permissions/location";

interface PermissionsState {
  locationStatus: PermissionStatus;

  requestLocationPermission: () => Promise<PermissionStatus>;
  checkLocationPermission: () => Promise<PermissionStatus>;
}


export const usePermissionStore = create<PermissionsState>()( set => ({
  locationStatus: 'undetermined',

  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({ locationStatus: status });
    return status;
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermissions();
    set({ locationStatus: status });
    return status;
  },
}));
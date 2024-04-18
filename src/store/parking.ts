import { makeAutoObservable } from "mobx";
import { IParking, IUser } from "../types/types";
import { getParkingApi } from "../api/api";

class ParkingStore {
  parking: IParking[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getParking() {
    try {
      const res = await getParkingApi();
      this.parking = res as IParking[];
    } catch (error) {
      console.log(error);
    }
  }

  addParking(parking: IParking, currentUser: IUser) {
    currentUser.parkingList.push(parking);
		console.log("currentUser.parkingList", currentUser.parkingList[0]);
  }

  //   setLike: (state, action) => {
  //   if(Object.keys(state.currentTrack).length !== 0 &&
  //   state.currentTrack?.id === action.payload.id) {
  //     state.currentTrack.stared_user.push(action.payload.user)
  //     console.log('po');
  //   }
  //   state?.currentPlaylist?.find(({id}) => id === action.payload.id)?.stared_user?.push(action.payload.user)
  // },
}

export default new ParkingStore();

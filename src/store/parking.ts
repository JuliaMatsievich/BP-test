import { makeAutoObservable } from "mobx";
import { IParking } from "../types/types";

class ParkingStore {
  parking: IParking[] = [];
  parkingCurrentUser: IParking[] = [];

  constructor() {
    makeAutoObservable(this);
  }

	setParkingCurrentUser (parkingList: IParking[]) {
		this.parkingCurrentUser = parkingList;
	}

  setParking(parking: IParking[]) {
    this.parking = parking;
  }

  addParking(parking: IParking) {
    this.parkingCurrentUser.push(parking);
  }

  deleteParking(parking: IParking) {
    this.parkingCurrentUser = this.parkingCurrentUser.filter(
      ({ id }) => id !== parking.id
    );
  }

}

export default ParkingStore;

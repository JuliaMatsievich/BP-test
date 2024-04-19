import ParkingStore from "./parking";
import  UsersStore  from "./users";

export function createStore() {
	return {
    usersStore: new UsersStore(),
    parkingStore: new ParkingStore(),
  };
}

export type Store = ReturnType<typeof createStore>
import { makeAutoObservable } from "mobx";
import { IUser } from "../types/types";

class UsersStore {
  users: IUser[] = [];
  currentUser: IUser = {
		id: "",
		firstName: "",
		lastName: "",
		patronymic: "",
		parkingList: []
	};

  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users: IUser[]) {
    this.users = users;
  }

  setCurrentUser(value: string) {
    this.currentUser = this.users.find((user) => user.id === value);
  }
}

export default UsersStore;

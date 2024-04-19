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

  // async getUsers() {
  //   try {
  //     const res = await getUsersApi();
  //     this.users = res as IUser[];
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  setUsers(users: IUser[]) {
    this.users = users;
  }

  setCurrentUser(value: string) {
    this.currentUser = this.users.find((user) => user.id === value);
  }
}

export default UsersStore;

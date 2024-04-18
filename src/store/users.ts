import {makeAutoObservable } from "mobx";
// import { getUsers } from "../api/api";

import { IUser } from "../types/types";
import { getUsersApi } from "../api/api";

class UsersStore {
	
  users: IUser[] = [];
  currentUser: IUser = {
    id: "",
    firstName: "",
    lastName: "",
    patronymic: "",
    parkingList: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getUsers() {
    try {
      const res = await getUsersApi();
      this.users = res as IUser[];
    } catch (error) {
      console.log(error);
    }
  }

  setCurrentUser(value: string) {
		this.currentUser = this.users.find((user) => user.id === value);
  }
}

export default new UsersStore();
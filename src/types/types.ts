export interface IParking {
	id: string;
	name: string
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  parkingList: IParking[];
}
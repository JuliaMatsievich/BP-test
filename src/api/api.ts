import axios from "axios";
import { IParking } from "../types/types";

const SERVER_URL = "http://localhost:3001";

export const getUsersApi = () => {
  return axios
    .get(`${SERVER_URL}/users`)
    .then(function (response) {
      // console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getParkingApi = () => {
  return axios
    .get(`${SERVER_URL}/parking`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updateParkingUserApi = (parking: IParking, idUser: string) => {
  return axios
    .post(`${SERVER_URL}/users/${idUser}`, {

    })
    .then(function (response) {
      console.log("p", response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getParkingApis = (userId: string) => {
  return axios
    .get(`${SERVER_URL}/users/${userId}`)
    .then(function (response) {
      console.log(userId);
      console.log("pr", response.data);
      const parkinglist = response.data.parkingList;
      console.log("parkinglist", parkinglist);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

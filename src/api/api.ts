import axios from "axios";
import { IParking } from "../types/types";

const SERVER_URL = "http://localhost:3001";

export const getUsersApi = async () => {
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

export const getParkingApi = async () => {
  return axios
    .get(`${SERVER_URL}/parking`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updateParkingUserApi = async (
	parkingList: IParking[],
  userId: string
) => {
  return axios
    .patch(`${SERVER_URL}/users/${userId}`, {
      parkingList: parkingList,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// export const deleteParkingUserApi = async (
//   parking: IParking,
//   userId: string
// ) => {
//   return axios
//     .delete(`${SERVER_URL}/users/${userId}`, {
//       parkingList: [parking],
//     })
//     .then(function (response) {
//       return response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

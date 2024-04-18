import { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { observer } from "mobx-react";
import usersStore from "../../store/users";
import parkingStore from "../../store/parking";
import { IParking } from "../../types/types";
// import { getParkingApis, updateParkingUserApi } from "../../api/api";

export const UserProfile = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    parkingStore.getParking();
  }, []);

  // useEffect(() => {
  //   updateParkingUserApi(
  //     {
  //       id: "17p",
  //       name: "Парковка 2",
  //     },
  //     "13f"
  //   );
  //   getParkingApis("12f");
  // }, []);

  const handleToggleParking = (parking: IParking) => {
    parkingStore.addParking(parking, usersStore.currentUser);
    // console.log("currentUser", usersStore.currentUser.parkingList);
  };

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>
          Имя пользователя:{" "}
          <span className={styles.nameUser}>
            {usersStore.currentUser.firstName}{" "}
            {usersStore.currentUser.patronymic}{" "}
            {usersStore.currentUser.lastName}{" "}
          </span>
        </h3>
        <div className={styles.subtitle} onClick={handleOpen}>
          Парковки <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen ? (
          <div className={styles.parkingList}>
            {parkingStore.parking.map((parking) => (
              <label key={parking.id}>
                <input
                  type="checkbox"
                  value={parking.id}
                  className={styles.parking}
                  // checked={value == {parking.id} ? true : false}
                  onChange={() => handleToggleParking(parking)}
                />
                {parking.name}
              </label>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
});

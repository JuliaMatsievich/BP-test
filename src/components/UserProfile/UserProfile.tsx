import { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { observer } from "mobx-react";
import { IParking } from "../../types/types";
import { useDataStore } from "../../store/context";
import { getParkingApi, updateParkingUserApi } from "../../api/api";

export const UserProfile = observer(() => {
  const store = useDataStore();
  const { usersStore, parkingStore } = store;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getParkingApi().then((response: IParking[]) => {
      parkingStore.setParking(response);
    });
		parkingStore.setParkingCurrentUser(usersStore.currentUser.parkingList);
  }, [parkingStore, usersStore.currentUser.parkingList]);

  const handleChecked = (id: string) => {
    return parkingStore.parkingCurrentUser.some((parking) => parking.id === id);
  };


  const handleToggleParking = (parking: IParking) => {
    if (parkingStore.parkingCurrentUser.find((p) => p.id === parking.id)) {
      parkingStore.deleteParking(parking);
    } else {
      parkingStore.addParking(parking);
    }
		updateParkingUserApi(
      parkingStore.parkingCurrentUser,
      usersStore.currentUser.id
    );
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
                  checked={handleChecked(parking.id)}
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

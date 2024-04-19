import { observer } from "mobx-react";
import styles from "./UsersList.module.css";
import { useEffect } from "react";
import { useDataStore } from "../../store/context";
import { getUsersApi } from "../../api/api";
import { IUser } from "../../types/types";

export const UsersList = observer(() => {
  const store = useDataStore();
  const { usersStore, parkingStore } = store;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    usersStore.setCurrentUser(e.target.value);
  };

  useEffect(() => {
    getUsersApi().then((response: IUser[]) => {
      usersStore.setUsers(response);
    });
  }, [usersStore.currentUser, parkingStore.parkingCurrentUser, usersStore]);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Пользователи</h2>
        <div className={styles.usersList}>
          {usersStore.users.map((user) => (
            <label key={user.id}>
              <input
                type="radio"
                name="radio"
                value={user.id}
                className={styles.user}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
              />{" "}
              {user.firstName} {user.patronymic} {user.lastName}
            </label>
          ))}
        </div>
      </div>
    </>
  );
});

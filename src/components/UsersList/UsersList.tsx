import { observer } from "mobx-react";
import styles from "./UsersList.module.css";
import { useEffect} from "react";
import usersStore from "../../store/users";

export const UsersList = observer(() => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		usersStore.setCurrentUser(e.target.value);
    console.log("currentUser", usersStore.currentUser.id);
  };

  useEffect(() => {
    usersStore.getUsers();
  }, []);

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
                // checked={value == "1" ? true : false}
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

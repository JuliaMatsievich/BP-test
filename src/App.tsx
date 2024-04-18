import "./App.css";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { UsersList } from "./components/UsersList/UsersList";

function App() {
  return (
    <div className='container'>
      <UsersList />
      <UserProfile/>
    </div>
  );
}

export default App;

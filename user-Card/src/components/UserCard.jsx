import NameAndEmailContainer from "./UserData.jsx";
import Header from "./Header.jsx";

function UserCard() {
  return (
    <div className="user-card">
      <Header />
      <UserData />
    </div>
  );
}

export default UserCard;

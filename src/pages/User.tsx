import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const User = () => {
  const user = useSelector((state: RootState) => state.user);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <img
        src={user.picture}
        alt={user.name}
        className="w-24 h-24 rounded-full"
      />
    </div>
  );
};

export default User;

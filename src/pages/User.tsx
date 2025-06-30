import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface UserState {
  name: string;
  email: string;
  picture: string;
  id: string;
}

const User = () => {
  const user = useSelector<RootState, UserState | null>((state) => state.user);

  useEffect(() => {
    fetch("http://localhost:5000/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokens: {
          refresh_token: "user_refresh_token_here",
        },
        customerId: "1234567890",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Campaigns:", data))
      .catch((error) => console.error("Error fetching campaigns:", error));
  }, []); // empty dependency array = runs only once

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

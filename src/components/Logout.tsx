import { clearUser } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("googleUser");
    dispatch(clearUser(undefined));
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 px-4 py-2 text-white rounded"
    >
      Logout
    </button>
  );
};

export default Logout;

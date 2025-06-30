import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("access_token");

    if (token) {
      localStorage.setItem("ads_token", token);
      navigate("/dashboard"); // বা যেখানে পাঠাতে চাও
    } else {
      navigate("/");
    }
  }, [location, navigate]);

  return <div>Logging in...</div>;
};

export default Success;

// src/components/GoogleLoginButton.tsx

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setFacebookUser } from "../redux/features/user/userSlice";

interface DecodedGoogleUser {
  name: string;
  email: string;
  picture: string;
  sub: string;
}

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        if (credentialResponse.credential) {
          const decoded = jwtDecode<DecodedGoogleUser>(
            credentialResponse.credential
          );

          const userInfo = {
            name: decoded.name,
            email: decoded.email,
            picture: decoded.picture,
            id: decoded.sub,
          };

          dispatch(setFacebookUser(userInfo));
          localStorage.setItem("googleUser", JSON.stringify(userInfo));
          navigate("/user");
        }
      }}
      onError={() => {
        console.log("❌ Google Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;

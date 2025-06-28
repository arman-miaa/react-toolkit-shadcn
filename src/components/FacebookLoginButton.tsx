import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setFacebookUser } from "@/redux/features/user/userSlice";

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

const FacebookLoginButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    (function (d, s, id) {
      if (d.getElementById(id)) return;
      let js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      d.head.appendChild(js);
    })(document, "script", "facebook-jssdk");

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: import.meta.env.VITE_FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v17.0",
      });
      console.log("✅ Facebook SDK Initialized");
    };
  }, []);

  const handleLogin = () => {
    if (!window.FB) {
      alert("❌ Facebook SDK not loaded yet.");
      return;
    }



  window.FB.login(
    (response: any) => {
      if (response.authResponse) {
        console.log("✅ Login success", response);

        window.FB.api(
          "/me",
          { fields: "name,email,picture" },
          (userInfo: any) => {
            console.log("👤 User info:", userInfo);

            const userPayload = {
              name: userInfo.name,
              email: userInfo.email,
              picture: userInfo.picture.data.url,
              id: userInfo.id,
            };

            // ✅ Redux এ পাঠাও
            dispatch(setFacebookUser(userPayload));

            // ✅ LocalStorage এ রাখো
            // localStorage.setItem("fbUser", JSON.stringify(userPayload));

            // ✅ Navigate করো
            navigate("/user");
          }
        );
      } else {
        console.log("❌ User cancelled login");
      }
    },
    { scope: "public_profile,email" }
  );

  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Login with Facebook
    </button>
  );
};

export default FacebookLoginButton;

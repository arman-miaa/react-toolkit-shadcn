import { useEffect } from "react";

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

const FacebookLoginButton = () => {
  useEffect(() => {
    // Load the Facebook SDK
    (function (d, s, id) {
      if (d.getElementById(id)) return;
      let js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      d.head.appendChild(js);
    })(document, "script", "facebook-jssdk");

    // Initialize Facebook SDK
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

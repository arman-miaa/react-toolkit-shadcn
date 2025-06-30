

// src/components/GoogleAdsLoginButton.tsx

const GoogleAdsLoginButton = () => {
    const handleLogin = () => {
      window.location.href = "http://localhost:5000/auth"; // <-- Server route
    };
  
    return <button onClick={handleLogin}>Login with Google Ads</button>;
  };
  

export default GoogleAdsLoginButton
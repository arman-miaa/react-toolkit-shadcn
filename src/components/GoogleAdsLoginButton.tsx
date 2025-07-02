

// src/components/GoogleAdsLoginButton.tsx

const GoogleAdsLoginButton = () => {
 

    const handleLogin = () => {
      window.location.href = "http://localhost:5000/auth"; 
    };
  
    return <button className="border p-2 rounded-lg" onClick={handleLogin}>Login with Google Ads</button>;
  };
  

export default GoogleAdsLoginButton
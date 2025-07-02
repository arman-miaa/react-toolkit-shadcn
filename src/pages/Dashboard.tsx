import { useEffect, useState } from "react";

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const token = localStorage.getItem("ads_token");
       
        console.log("Token:", token);

        const res = await fetch("http://localhost:5000/campaigns", {
          headers: {
            Authorization: `Bearer ${token}`,
     
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          const errorMessage =
            errorData?.error?.error?.message ||
            errorData?.error?.message ||
            errorData?.message ||
            "Failed to fetch campaigns";

          throw new Error(errorMessage);
        }

        const data = await res.json();
        setCampaigns(data.results || data);
      } catch (err: any) {
        let errorMessage = "";

        if (typeof err === "string") {
          errorMessage = err;
        } else if (err instanceof Error) {
          errorMessage = err.message;
        } else {
          try {
            errorMessage = JSON.stringify(err, null, 2);
          } catch {
            errorMessage = "Unknown error occurred";
          }
        }

        setError(errorMessage);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Google Ads Campaigns</h2>
      {error && <p>❌ {error}</p>}
      {campaigns.length > 0 ? (
        <ul>
          {campaigns.map((campaign, idx) => (
            <li key={idx}>
              📢 {campaign.campaign?.name} - {campaign.metrics?.clicks} Clicks
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;

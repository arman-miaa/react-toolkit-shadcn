import { useEffect, useState } from "react";

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
console.log('campaigns data',campaigns);
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const token = localStorage.getItem("ads_token");
        console.log("Fetching campaigns with token:", token);

        const res = await fetch("http://localhost:5000/campaigns", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Response status:", res.status);

        if (!res.ok) {
          const errorData = await res.json();
          console.error("Error response data:", errorData);
          throw new Error(errorData.error || "Failed to fetch campaigns");
        }

        const data = await res.json();
        console.log("Campaigns data received:", data);

        setCampaigns(data.results || data); // adjust according to response shape
      } catch (err: any) {
        console.error("Fetch campaigns error:", err);
        setError(err.message);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Google Ads Campaigns</h2>
      {error && <p style={{ color: "red" }}>❌ {error}</p>}
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

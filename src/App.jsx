import { useEffect, useState } from "react";

const url = window.location.hash;
const searchParams = new URLSearchParams(url);
let accessToken = searchParams.get("#access_token");

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.twitch.tv/helix/streams/followed?user_id=${
        import.meta.env.VITE_USER_ID
      }`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Client-Id": `${import.meta.env.VITE_CLIENT_ID}`,
        },
      }
    )
      .then(res => res.json())
      .then(res => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="bg-purple-400">
      {data ? (
        data.map(channel => <div key={channel.id}>{channel.user_login}</div>)
      ) : (
        <a
          href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${
            import.meta.env.VITE_CLIENT_ID
          }&redirect_uri=${
            import.meta.env.VITE_REDIRECT_URI
          }&scope=user:read:follows`}
        >
          Connect With Twitch
        </a>
      )}
    </div>
  );
}

export default App;

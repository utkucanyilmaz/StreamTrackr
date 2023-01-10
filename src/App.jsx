import { useEffect, useState } from "react";
import User from "./components/User";

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
  console.log(data);
  return (
    <div className="bg-tw-black max-w-[440px]">
      {data ? (
        data.map(channel => (
          <User
            key={channel.id}
            imgSrc={channel.thumbnail_url
              .slice(0, channel.thumbnail_url.length - 20)
              .concat("854x480.jpg")}
            alt={`image from the ${channel.user_name}'s stream`}
            username={channel.user_name}
            title={channel.title}
            game={channel.game_name}
            viewer={channel.viewer_count}
            userLogin={channel.user_login}
          />
        ))
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

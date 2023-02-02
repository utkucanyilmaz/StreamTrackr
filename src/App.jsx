import { useEffect, useState } from "react";
import Channel from "./components/Channel";
import Link from "./components/Link";

const urlHash = window.location.hash;
const searchParams = new URLSearchParams(urlHash);
let accessToken = searchParams.get("#access_token");

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      fetch(`https://api.twitch.tv/helix/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Client-Id": `${import.meta.env.VITE_CLIENT_ID}`,
        },
      })
        .then(res => res.json())
        .then(res => setUser(res));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetch(
        `https://api.twitch.tv/helix/streams/followed?user_id=${user.data[0].id}`,
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
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  return (
    <div className="bg-tw-black flex flex-col items-center justify-center gap-y-4 py-6 px-4 min-h-screen">
      {data.length > 0 ? (
        data.map(channel => (
          <Channel
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
        <Link />
      )}
    </div>
  );
}

export default App;

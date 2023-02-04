import { useEffect, useState } from "react";
import ChannelList from "./components/ChannelList";
import { getFollowedChannels, accessToken } from "./api";
import Link from "./components/Link";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const followedChannels = await getFollowedChannels();
      followedChannels && setData(followedChannels);
    })();
  }, []);

  return (
    <div className="bg-tw-black flex flex-col items-center justify-center">
      {accessToken ? <ChannelList data={data} /> : <Link />}
    </div>
  );
}

export default App;

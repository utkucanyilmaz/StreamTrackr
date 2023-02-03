import { useEffect, useState } from "react";
import ChannelList from "./components/ChannelList";
import { getFollowedChannels } from "./api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const followedChannels = await getFollowedChannels();
      followedChannels && setData(followedChannels);
    })();
  }, []);

  return <ChannelList data={data} />;
}

export default App;

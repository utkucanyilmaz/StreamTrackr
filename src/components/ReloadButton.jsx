import React from "react";
import { TfiReload } from "react-icons/tfi";
import { useUser } from "../context/UserContext";
import { getFollowedChannels } from "../api";

function ReloadButton() {
  const { setIsLoading, setData } = useUser();

  const handleReload = async () => {
    setIsLoading(true);
    const followedChannelsData = await getFollowedChannels();
    followedChannelsData && setData(followedChannelsData);
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleReload}
      className="group flex items-center justify-center bg-purple-500 p-2 rounded-full hover:bg-purple-200 transition-colors"
    >
      <TfiReload className="text-purple-800 group-hover:-rotate-180 duration-300" />
    </button>
  );
}

export default ReloadButton;

import React from "react";
import { useUser } from "../context/UserContext";
import Channel from "./Channel";
import StreamPlaceholder from "./StreamPlaceholder";

function ChannelList() {
  const { filteredData, isLoading } = useUser();

  return (
    <div className="flex flex-col items-center justify-start gap-y-2 p-2 font-helvetica text-white overflow-y-scroll">
      {isLoading ? (
        <StreamPlaceholder />
      ) : (
        filteredData.map(channel => (
          <Channel
            key={channel.id}
            imgSrc={channel.thumbnail_url
              .slice(0, channel.thumbnail_url.length - 20)
              .concat("426x240.jpg")}
            alt={`Preview of ${channel.user_name}'s stream`}
            username={channel.user_name}
            title={channel.title}
            game={channel.game_name}
            viewer={channel.viewer_count}
            userLogin={channel.user_login}
          />
        ))
      )}
    </div>
  );
}

export default ChannelList;

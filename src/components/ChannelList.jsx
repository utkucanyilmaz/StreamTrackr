import React from "react";
import { useUser } from "../context/UserContext";
import Channel from "./Channel";
import StreamPlaceholder from "./StreamPlaceholder";

function ChannelList() {
  const { filteredData } = useUser();

  return (
    <div className="flex flex-col items-center justify-start gap-y-2 p-2 min-h-screen font-helvetica text-white overflow-hidden">
      {filteredData.length > 0 ? (
        filteredData.map(channel => (
          <Channel
            key={channel.id}
            imgSrc={channel.thumbnail_url
              .slice(0, channel.thumbnail_url.length - 20)
              .concat("426x240.jpg")}
            alt={`image from the ${channel.user_name}'s stream`}
            username={channel.user_name}
            title={channel.title}
            game={channel.game_name}
            viewer={channel.viewer_count}
            userLogin={channel.user_login}
          />
        ))
      ) : (
        <StreamPlaceholder />
      )}
    </div>
  );
}

export default ChannelList;

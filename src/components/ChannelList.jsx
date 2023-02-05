import React from "react";
import { useUser } from "../context/UserContext";
import Channel from "./Channel";
import Placeholder from "./Placeholder";

function ChannelList() {
  const { data } = useUser();
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 py-4 px-2 min-h-screen">
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
        <Placeholder />
      )}
    </div>
  );
}

export default ChannelList;

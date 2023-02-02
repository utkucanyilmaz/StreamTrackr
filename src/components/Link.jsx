import React from "react";

function Link() {
  return (
    <div>
      <a
        href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${
          import.meta.env.VITE_CLIENT_ID
        }&redirect_uri=${
          import.meta.env.VITE_REDIRECT_URI
        }&scope=user:read:follows`}
        className="text-white"
      >
        Connect With Twitch
      </a>
    </div>
  );
}

export default Link;

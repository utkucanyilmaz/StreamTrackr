import axios from "axios";

const urlHash = window.location.hash;
const searchParams = new URLSearchParams(urlHash);
let accessToken = searchParams.get("#access_token");

export const getFollowedChannels = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://api.twitch.tv/helix/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Client-Id": `${import.meta.env.VITE_CLIENT_ID}`,
      },
    });

    const followedChannelsRes = await axios.get(
      `https://api.twitch.tv/helix/streams/followed?user_id=${data[0].id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Client-Id": `${import.meta.env.VITE_CLIENT_ID}`,
        },
      }
    );

    const {
      data: { data: followedChannels },
    } = followedChannelsRes;

    return followedChannels;
  } catch (e) {
    console.log(e);
  }
};

import axios from "axios";

const urlHash = window.location.hash;
const searchParams = new URLSearchParams(urlHash);
export const accessToken = searchParams.get("#access_token");

export const getUser = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://api.twitch.tv/helix/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Client-Id": `${import.meta.env.VITE_CLIENT_ID}`,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getFollowedChannels = async () => {
  const user = await getUser();
  try {
    const followedChannelsRes = await axios.get(
      `https://api.twitch.tv/helix/streams/followed?user_id=${user[0].id}`,
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

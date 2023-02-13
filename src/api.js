import axios from "axios";

const urlHash = window.location.hash;
const searchParams = new URLSearchParams(urlHash);
export const accessToken = searchParams.get("#access_token");

export const getUser = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`, {
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
      `${import.meta.env.VITE_BASE_URL}/streams/followed?user_id=${user[0].id}`,
      {
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

export const validateAccessToken = async () => {
  try {
    const validation = axios.get(`https://id.twitch.tv/oauth2/validate`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return validation;
  } catch (e) {
    console.log(e);
  }
};

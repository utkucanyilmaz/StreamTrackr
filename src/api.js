import axios from "axios";

// const urlHash = window.location.hash;
// const searchParams = new URLSearchParams(urlHash);
// searchParams.get("#access_token");

export const getUser = async accessToken => {
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

export const getFollowedChannels = async (accessToken, userId) => {
  try {
    const followedChannelsRes = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/streams/followed?user_id=${userId}`,
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

export const validateAccessToken = async accessToken => {
  try {
    const validation = await axios.get(`https://id.twitch.tv/oauth2/validate`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return validation;
  } catch (e) {
    return e;
  }
};

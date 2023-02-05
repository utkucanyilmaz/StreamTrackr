import { createContext, useContext, useEffect, useState } from "react";
import { getFollowedChannels, getUser } from "../api";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState();

  const values = {
    data,
    setData,
    user,
    setUser,
  };

  useEffect(() => {
    (async () => {
      const followedChannelsData = await getFollowedChannels();
      followedChannelsData && setData(followedChannelsData);
      const userData = await getUser();
      userData && setUser(userData);
    })();
  }, []);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };

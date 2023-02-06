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
      const userData = await getUser();
      followedChannelsData && setData(followedChannelsData);
      userData && setUser(userData);
    })();
  }, []);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };

import { createContext, useContext, useEffect, useState } from "react";
import { getFollowedChannels } from "../api";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const values = {
    data,
    setData,
  };

  useEffect(() => {
    (async () => {
      const followedChannels = await getFollowedChannels();
      followedChannels && setData(followedChannels);
    })();
  }, []);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };

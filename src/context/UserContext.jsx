import { createContext, useContext, useEffect, useState } from "react";
import { getFollowedChannels, getUser } from "../api";
import { useAccessToken } from "./AccessTokenContext";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const { accessToken } = useAccessToken();

  const values = {
    data,
    setData,
    user,
    setUser,
    filteredData,
    setFilteredData,
    isLoading,
    setIsLoading,
  };

  useEffect(() => {
    getAndSetAllData();
  }, [accessToken]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const getAndSetAllData = async () => {
    const userData = await getUser(accessToken);
    const followedChannelsData = await getFollowedChannels(
      accessToken,
      userData[0]?.id
    );
    if (userData) {
      setUser(userData);
    }
    if (followedChannelsData) {
      setData(followedChannelsData);
    }
    setIsLoading(false);
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };

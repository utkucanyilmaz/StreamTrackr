import { createContext, useContext, useEffect, useState } from "react";
import { getFollowedChannels, getUser, validateAccessToken } from "../api";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  // const [validation, setValidation] = useState();

  const values = {
    data,
    setData,
    user,
    setUser,
    filteredData,
    setFilteredData,
    isLoading,
    setIsLoading,
    // validation,
    // setValidation,
  };

  useEffect(() => {
    getAndSetAllData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const getAndSetAllData = async () => {
    // const validation = await validateAccessToken();
    // validation && setValidation(validation);
    const userData = await getUser();
    const followedChannelsData = await getFollowedChannels();
    userData && setUser(userData);
    followedChannelsData && setData(followedChannelsData);
    setIsLoading(false);
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };

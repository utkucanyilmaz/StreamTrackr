import { createContext, useContext, useEffect, useState } from "react";
import { getFollowedChannels, getUser, validateAccessToken } from "../api";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  const [filteredData, setFilteredData] = useState(data);
  // const [validation, setValidation] = useState();

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const values = {
    data,
    setData,
    user,
    setUser,
    filteredData,
    setFilteredData,
    // validation,
    // setValidation,
  };

  useEffect(() => {
    (async () => {
      // const validation = await validateAccessToken();
      const followedChannelsData = await getFollowedChannels();
      const userData = await getUser();
      // validation && setValidation(validation);
      followedChannelsData && setData(followedChannelsData);
      userData && setUser(userData);
    })();
  }, []);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };

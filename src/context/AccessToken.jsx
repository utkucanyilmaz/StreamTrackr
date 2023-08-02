import { createContext, useContext, useState } from "react";

const AccessTokenContext = createContext();

const AccessToken = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("userAccessToken") || false
  );

  const values = {
    accessToken,
    setAccessToken,
  };

  return (
    <AccessTokenContext.Provider value={values}>
      {children}
    </AccessTokenContext.Provider>
  );
};

const useAccessToken = () => useContext(AccessTokenContext);

export { AccessToken, useAccessToken };

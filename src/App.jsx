import ChannelList from "./components/ChannelList";
import User from "./components/User";
import AccessTokenForm from "./components/AccessTokenForm";

import { useTheme } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import { useAccessToken } from "./context/AccessTokenContext";
import { useEffect, useState } from "react";
import { validateAccessToken } from "./api";

function App() {
  const { accessToken } = useAccessToken();
  const { darkMode } = useTheme();
  const [isTokenValid, setIsTokenValid] = useState(null);

  useEffect(() => {
    const checkTokenValid = async () => {
      const res = await validateAccessToken(
        accessToken || localStorage.getItem("userAccessToken")
      );

      if (res?.status === 200) {
        setIsTokenValid(true);
        return;
      }

      if (res?.response?.status === 401) {
        setIsTokenValid(false);
        return;
      }

      if (Date.now() === res?.data.expires_in * 1000 + Date.now()) {
        setIsTokenValid(false);
        return;
      }
    };

    checkTokenValid();
  }, [accessToken]);

  if (isTokenValid === null) {
    return null;
  }

  return (
    <div
      className={`w-[400px] h-[560px] mx-auto flex flex-col items-center justify-start antialiased transition-colors selection:text-purple-100 selection:bg-purple-500 ${
        darkMode ? "bg-tw-black" : "bg-tw-white"
      }`}
    >
      {accessToken && isTokenValid ? (
        <UserProvider>
          <User />
          <ChannelList />
        </UserProvider>
      ) : (
        <AccessTokenForm />
      )}
    </div>
  );
}

export default App;

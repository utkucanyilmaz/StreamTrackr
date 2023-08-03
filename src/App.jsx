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
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  useEffect(() => {
    const checkTokenExpired = async () => {
      try {
        const res = await validateAccessToken(
          accessToken || localStorage.getItem("userAccessToken")
        );

        if (Date.now() === res.data.expires_in * 1000 + Date.now()) {
          setIsTokenExpired(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    localStorage.getItem("userAccessToken") && checkTokenExpired();
  }, []);

  return (
    <div
      className={`w-[400px] h-[560px] mx-auto flex flex-col items-center justify-start antialiased transition-colors selection:text-purple-100 selection:bg-purple-500 ${
        darkMode ? "bg-tw-black" : "bg-tw-white"
      }`}
    >
      {accessToken && !isTokenExpired ? (
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

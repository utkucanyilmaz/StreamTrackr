import ChannelList from "./components/ChannelList";
import Link from "./components/Link";
import User from "./components/User";
import { useTheme } from "./context/ThemeContext";

import { accessToken } from "./api";

function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`max-w-screen mx-auto flex flex-col items-center justify-center antialiased min-h-screen transition-colors ${
        darkMode ? "bg-tw-black" : "bg-tw-white"
      }`}
    >
      {accessToken ? (
        <>
          <User />
          <div className="max-w-[450px]">
            <ChannelList />
          </div>
        </>
      ) : (
        <Link />
      )}
    </div>
  );
}

export default App;

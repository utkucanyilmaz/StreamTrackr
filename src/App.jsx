import ThemeButton from "./components/ThemeButton";
import ChannelList from "./components/ChannelList";
import Link from "./components/Link";
import { useTheme } from "./context/ThemeContext";

import { accessToken } from "./api";

function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center antialiased min-h-screen ${
        darkMode ? "bg-tw-black" : "bg-tw-white"
      } transition-colors`}
    >
      {accessToken ? (
        <>
          <ThemeButton />
          <ChannelList />
        </>
      ) : (
        <Link />
      )}
    </div>
  );
}

export default App;

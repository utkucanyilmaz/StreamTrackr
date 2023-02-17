import React from "react";

import { useUser } from "../context/UserContext";

import ThemeButton from "./ThemeButton";
import UserPlaceholder from "./UserPlaceholder";
import SearchBar from "./SearchBar";
import GithubButton from "./GithubButton";
import UserInfo from "./UserInfo";
import ReloadButton from "./ReloadButton";

function User() {
  const { user } = useUser();

  return user ? (
    <div
      className={`flex justify-between items-center w-full px-4 py-2 bg-purple-800`}
    >
      <div className="flex items-center justify-center gap-x-2">
        <UserInfo />
      </div>

      <div className="flex items-center gap-x-1">
        <SearchBar />
        <ReloadButton />
        <GithubButton />
        <ThemeButton />
      </div>
    </div>
  ) : (
    <UserPlaceholder />
  );
}

export default User;

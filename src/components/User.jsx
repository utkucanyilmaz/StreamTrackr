import React from "react";

import { useUser } from "../context/UserContext";

import ThemeButton from "./ThemeButton";
import UserPlaceholder from "./UserPlaceholder";
import SearchBar from "./SearchBar";
import GithubButton from "./GithubButton";
import UserInfo from "./UserInfo";

function User() {
  const { user } = useUser();

  return user ? (
    <div
      className={`flex justify-between items-center w-full px-4 py-2 bg-purple-800 selection:text-purple-100 selection:bg-purple-500`}
    >
      <div className="flex items-center justify-center gap-x-2">
        <UserInfo />
      </div>

      <div className="flex items-center gap-x-2">
        <SearchBar />
        <GithubButton />
        <ThemeButton />
      </div>
    </div>
  ) : (
    <UserPlaceholder />
  );
}

export default User;

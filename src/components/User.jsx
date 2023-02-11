import React from "react";
import { useUser } from "../context/UserContext";
import ThemeButton from "./ThemeButton";
import UserPlaceholder from "./UserPlaceholder";
import { BsGithub } from "react-icons/bs";

function User() {
  const { user } = useUser();

  return user ? (
    <div className="bg-purple-800 flex justify-between items-center w-full px-4 py-1">
      <div className="flex items-center justify-center gap-x-2">
        <img
          className="h-8 rounded-full border border-purple-500"
          src={user[0].profile_image_url}
          alt=""
        />
        <p className="text-md font-bold text-white">{user[0].display_name}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <a
          className="group p-1"
          href="https://github.com/utkucanyilmaz/"
          target="_blank"
        >
          <BsGithub
            size={30}
            className="text-purple-400 group-hover:text-purple-200 transition-colors"
          />
        </a>

        <ThemeButton />
      </div>
    </div>
  ) : (
    <UserPlaceholder />
  );
}

export default User;

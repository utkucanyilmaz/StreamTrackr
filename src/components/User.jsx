import React from "react";
import { useUser } from "../context/UserContext";
import ThemeButton from "./ThemeButton";
import UserPlaceholder from "./UserPlaceholder";

function User() {
  const { user } = useUser();

  return user ? (
    <div className="bg-purple-800 flex justify-between items-center w-full px-2 py-4">
      <div className="flex items-center justify-center gap-x-2">
        <img
          className="h-10 rounded-full border border-purple-500"
          src={user[0].profile_image_url}
          alt=""
        />
        <p className="text-md font-bold text-white">{user[0].display_name}</p>
      </div>
      <ThemeButton />
    </div>
  ) : (
    <UserPlaceholder />
  );
}

export default User;

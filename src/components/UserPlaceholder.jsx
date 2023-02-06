import React from "react";

function UserPlaceholder() {
  return (
    <div className="bg-purple-800 flex justify-between items-center w-full px-2 py-4">
      <div className="flex items-center justify-center gap-x-2">
        <div className="h-10 w-10 bg-purple-600 rounded-full border border-purple-500 animate-pulse" />
        <div className="bg-purple-600 h-6 w-24 rounded-lg animate-pulse"></div>
      </div>
      <div className="bg-purple-600 py-3 px-7 rounded-lg animate-pulse"></div>
    </div>
  );
}

export default UserPlaceholder;

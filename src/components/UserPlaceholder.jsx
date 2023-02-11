import React from "react";

function UserPlaceholder() {
  return (
    <div className="bg-purple-800 flex justify-between items-center w-full px-4 py-2">
      <div className="flex items-center justify-center gap-x-2">
        <div className="h-8 w-8 bg-purple-600 rounded-full border border-purple-500 animate-pulse" />
        <div className="bg-purple-600 h-6 w-24 rounded-lg animate-pulse"></div>
      </div>
      <div className="flex gap-x-2">
        <div className="h-8 w-8 bg-purple-600 rounded-full animate-pulse"></div>
        <div className="h-8 w-8 bg-purple-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export default UserPlaceholder;

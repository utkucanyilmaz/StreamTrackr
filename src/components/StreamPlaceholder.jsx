import React from "react";

function StreamPlaceholder() {
  const windowHeight = window.innerHeight;
  const placeholderHeight = 84;
  const arrayLength = Math.floor(windowHeight / placeholderHeight);
  const placeholderArray = new Array(arrayLength).fill(null);

  return (
    <div className="flex flex-col gap-y-2">
      {placeholderArray.map((_, index) => (
        <div
          key={index}
          className="rounded-lg bg-purple-800 w-[433px] h-[78px] grid grid-cols-3 gap-x-2 overflow-hidden"
        >
          <div className="h-full w-full aspect-video bg-purple-700 relative animate-pulse">
            <div className="bg-purple-600 h-[20px] w-[44px] absolute bottom-2 left-2 rounded-md animate-pulse"></div>
          </div>
          <div className="flex flex-col justify-between pr-2 py-2 col-span-2">
            <p className="w-20 h-4 bg-purple-600 animate-pulse rounded-lg"></p>
            <p className="w-36 h-4 bg-purple-600 animate-pulse rounded-lg"></p>
            <p className="w-24 h-4 bg-purple-600 animate-pulse rounded-lg"></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StreamPlaceholder;

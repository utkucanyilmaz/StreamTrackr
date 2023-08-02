import { FiUser } from "react-icons/fi";

export default function Channel({
  imgSrc,
  alt,
  username,
  title,
  game,
  viewer,
  userLogin,
}) {
  const formatViewerNumber = input => {
    const formattedViewer = new Intl.NumberFormat(window.navigator.language, {
      notation: "compact",
    });
    return formattedViewer.format(input);
  };

  return (
    <div
      className={`rounded-lg bg-purple-600 hover:bg-purple-800 transition-colors`}
    >
      <a href={`https://www.twitch.tv/${userLogin}`} target="_blank">
        <div className="grid grid-cols-3 gap-x-2 overflow-hidden rounded-lg">
          <div className="relative">
            <img
              src={imgSrc}
              alt={alt}
              className="h-full w-full aspect-video"
            />
            <p className="inline-flex items-center gap-x-1 bg-purple-500 rounded-md py-[2px] px-1 absolute bottom-2 left-2 bg-opacity-80">
              <span className="text-xs">
                <FiUser color="red" />
              </span>
              <span className="text-xs">{formatViewerNumber(viewer)}</span>
            </p>
          </div>

          <div className="flex flex-col justify-between gap-y-1 pr-2 py-2 col-span-2">
            <p className="text-sm font-bold">{username}</p>
            <p className="text-xs truncate">{title}</p>
            <p className="text-xs font-semibold">{game}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

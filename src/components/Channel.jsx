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
  const viewerFloat =
    viewer > 999
      ? `${Number(viewer.toLocaleString())
          .toFixed(1)
          .replace(".", ",")} B izleyici`
      : `${viewer} izleyici`;

  return (
    <div className="rounded-xl bg-purple-900 overflow-hidden hover:bg-purple-600 max-w-[450px]">
      <a
        href={`https://www.twitch.tv/${userLogin}`}
        target="_blank"
        className="text-white font-helvetica"
      >
        <div className="grid grid-cols-2">
          <div className="relative">
            <img
              src={imgSrc}
              alt={alt}
              className="rounded-xl h-full aspect-video"
            />
            <p className="inline-flex items-center gap-x-1 bg-purple-600 rounded-md p-1 absolute bottom-2 left-2 bg-opacity-80">
              <span>
                <FiUser color="red" />
              </span>
              <span className="text-xs">{viewerFloat}</span>
            </p>
          </div>

          <div className=" flex flex-col justify-between gap-y-2 p-4">
            <p className="text-md font-bold">{username}</p>
            <p className="text-sm truncate">{title}</p>
            <p className="text-xs font-semibold">{game}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

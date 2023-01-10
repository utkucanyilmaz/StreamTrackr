import { FiUser } from "react-icons/fi";

export default function User({
  imgSrc,
  alt,
  username,
  title,
  game,
  viewer,
  userLogin,
}) {
  return (
    <a
      href={`https://www.twitch.tv/${userLogin}`}
      target="_blank"
      className="text-white font-helvetica"
    >
      <img src={imgSrc} alt={alt} />
      <div>
        <p>{username}</p>
        <p>{title}</p>
        <p>{game}</p>
        <p className="inline-block">
          <FiUser color="red"></FiUser>
          {viewer > 999
            ? `${viewer
                .toLocaleString()
                .slice(0, viewer.toLocaleString().indexOf(",") + 2)} B izleyici`
            : `${viewer} izleyici`}
        </p>
      </div>
    </a>
  );
}

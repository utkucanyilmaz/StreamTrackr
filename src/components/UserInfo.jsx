import { useUser } from "../context/UserContext";

function UserInfo() {
  const { user } = useUser();
  return (
    <>
      <a
        href={`https://www.twitch.tv/${user[0].display_name}`}
        className="text-base font-bold text-white hover:text-purple-300 transition-colors flex items-center justify-center gap-x-2"
      >
        <img
          className="h-8 rounded-full border border-purple-500"
          src={user[0].profile_image_url}
          alt=""
        />
        {user[0].display_name}
      </a>
    </>
  );
}

export default UserInfo;

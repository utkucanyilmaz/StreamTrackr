import { useUser } from "../context/UserContext";

function UserInfo() {
  const { user } = useUser();
  return (
    <>
      <img
        className="h-8 rounded-full border border-purple-500"
        src={user[0].profile_image_url}
        alt=""
      />
      <a
        href={`https://www.twitch.tv/${user[0].display_name}`}
        className="text-md font-bold text-white hover:text-purple-300 transition-colors"
      >
        {user[0].display_name}
      </a>
    </>
  );
}

export default UserInfo;

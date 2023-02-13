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
      <p className="text-md font-bold text-white">{user[0].display_name}</p>
    </>
  );
}

export default UserInfo;

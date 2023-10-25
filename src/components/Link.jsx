function Link() {
  return (
    <a
      href={`${import.meta.env.VITE_LINK}`}
      className="py-2 rounded-md bg-purple-600 text-white hover:bg-purple-800 cursor-pointer transition-colors text-center"
      target="_blank"
    >
      Get Twitch Access Token
    </a>
  );
}

export default Link;

function Link() {
  return (
    <a
      href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${
        import.meta.env.VITE_CLIENT_ID
      }&redirect_uri=${
        import.meta.env.VITE_REDIRECT_URI
      }&scope=user:read:follows`}
      className="py-2 rounded-md bg-purple-600 text-white hover:bg-purple-800 cursor-pointer transition-colors text-center"
      target="_blank"
    >
      Get Your Access Token
    </a>
  );
}

export default Link;

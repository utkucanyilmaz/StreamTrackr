import { validateAccessToken } from "../api";
import { useState, useRef } from "react";
import { useAccessToken } from "../context/AccessToken";

function AccessTokenForm() {
  const { setAccessToken } = useAccessToken();
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef();

  const handleFormSubmit = async e => {
    e.preventDefault();
    if (
      inputRef.current.value === "" ||
      inputRef.current.value.length === 0 ||
      inputRef.current.value.trim() === ""
    )
      return;
    const res = await validateAccessToken(inputRef.current.value);
    if (res?.status === 200) {
      localStorage.setItem("userAccessToken", inputRef.current.value);
      setAccessToken(inputRef.current.value);
    } else {
      setErrorMessage("Invalid or expired access token entered");
    }
  };

  return (
    <form
      className="bg-white flex flex-col gap-y-2 py-10 px-4 w-[calc(100%-2rem)] rounded-lg my-auto"
      onSubmit={handleFormSubmit}
    >
      <input
        className="p-2 rounded-md border border-purple-600 focus:outline-purple-600"
        type="text"
        placeholder="Enter your Twitch Access Token"
        ref={inputRef}
      />

      {errorMessage && (
        <span className="text-sm italic text-red-500">{errorMessage}</span>
      )}

      <button
        className="py-2 rounded-md bg-purple-600 text-white hover:bg-purple-800 cursor-pointer transition-colors"
        type="submit"
      >
        Set Access Token
      </button>
    </form>
  );
}

export default AccessTokenForm;

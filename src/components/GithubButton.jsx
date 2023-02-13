import { BsGithub } from "react-icons/bs";

function GithubButton() {
  return (
    <a
      className="group rounded-full"
      href="https://github.com/utkucanyilmaz/"
      target="_blank"
    >
      <BsGithub
        size={32}
        className="text-purple-400 group-hover:text-purple-200 transition-colors"
      />
    </a>
  );
}

export default GithubButton;

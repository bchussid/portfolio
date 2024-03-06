"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const icons = [
  {
    icon: <FaGithub />,
    path: "https://github.com/bchussid",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ben-chussid/",
  },
];

// ? typescript refactor?
const Socials = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link key={index} href={icon.path} target="_blank">
          <div className={`${iconStyles}`}>{icon.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

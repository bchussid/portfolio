"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const icons = [
  {
    icon: <GitHubLogoIcon />,
    path: "/",
  },
  {
    icon: <LinkedInLogoIcon />,
    path: "/",
  },
];

// ? typescript refactor?
const Socials = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link key={index} href={icon.path}>
          <div className={`${iconStyles}`}>{icon.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

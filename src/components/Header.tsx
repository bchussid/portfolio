"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// components
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <header
      className={`${
        header
          ? "py-2 bg-popover shadow-xl dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 item-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeSwitch />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import { React, useState } from "react";
import Link from "next/link";

import Logo from "./Logo";
import MemoMobileLogo from "../svg/MobileLogo";
import Navigation from "./Navigation";
import RadioPlayer from "./RadioPlayer";
import MobileRadioPlayer from "./MobileRadioPlayer";

export default function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="q-header-wrap text-xs">
      <div className="flex flex-row-reverse justify-between w-full items-center lg:flex-row z-10">
        <div className="col-radio lg:flex-1">
          {/*<RadioPlayer />*/}
          {/*<MobileRadioPlayer />*/}
          <div
            className="mobile-menu block relative z-10 w-10 h-10 rounded-full border-4 border-red cursor-pointer lg:hidden"
            onClick={toggleMenu}
          ></div>
        </div>
        <div className="col-logo flex items-center justify-center z-10">
          <Link href="/">
            <Logo width="12em" className="hidden lg:block" />
            <MemoMobileLogo className="lg:hidden h-7" />
          </Link>
        </div>
        <div
          className={`col-menu fixed left-0 top-0 bottom-0 right-0 lg:flex-1 lg:relative lg:left-auto lg:right-auto lg:top-auto lg:bottom-auto bg-black lg:bg-transparent z-0 p-12 pt-[20vh] lg:p-0 ${showMenu ? "mob:fadeIn" : "mob:fadeOut"}`}
        >
          <Navigation closeMenu={closeMenu} />
        </div>
      </div>
    </div>
  );
}


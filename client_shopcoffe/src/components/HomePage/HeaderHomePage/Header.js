import React from "react";
import Menu from "./Menu.js";
import UserMenu from "./UserMenu.js";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header w-screen h-20 mx-auto items-center flex justify-between px-10 sm:w-[100%] lg:w-screen">
      <Link to={"/"}>
        <img
          className="object-fit pl-10"
          src="/images/logo.png"
          alt=""
          width={200}
          height={200}
        />
      </Link>
      <Menu />
      <UserMenu />
    </div>
  );
}

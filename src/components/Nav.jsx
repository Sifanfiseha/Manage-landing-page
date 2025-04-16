import logo from "../assets/logo.svg";
import Button from "./Button";
import { navLink } from "../data/data";
import Menu from "./Menu";
import { useRef } from "react";
import { useState } from "react";

export default function Nav() {
  const [isopen, setIsOpen] = useState(false);
  const modal = useRef();
  function handleOpenMenu() {
    setIsOpen((prev) => !prev);
  }
  function handleCloseMenu() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header>
      <nav className="flex relative items-center my-14 mx-12 md:mx-32 justify-between">
        <img src={logo} alt="manage logo" />
        <ul className="md:flex hidden items-center gap-8">
          {navLink.map((link) => (
            <li
              className="capitalize  cursor-pointer hover:text-stone-600 duration-110 ease-in font-semibold"
              key={link}
            >
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
        <Button classes="hidden text-white md:block">get started</Button>
        <div className="w-10 h-10 flex  md:hidden items-center justify-center -mt-2">
          {!isopen ? (
            <button
              onClick={handleOpenMenu}
              className="flex md:hidden  flex-col gap-1"
            >
              <div className="w-8 h-1 bg-Very-Dark-Blue rounded-sm"></div>
              <div className="w-8 h-1 bg-Very-Dark-Blue rounded-sm"></div>
              <div className="w-8 h-1 bg-Very-Dark-Blue rounded-sm"></div>
            </button>
          ) : (
            <button
              onClick={handleCloseMenu}
              className="w-8 block z-100  md:hidden relative cursor-pointer h-8"
            >
              <div className="w-full h-1 absolute rotate-45 inset-0 bg-Very-Dark-Blue rounded-sm"></div>
              <div className="w-full h-1 absolute -rotate-45 inset-0  bg-Very-Dark-Blue rounded-sm"></div>
            </button>
          )}
        </div>
        <Menu isopen={isopen} actions={"cancel"} ref={modal}></Menu>
      </nav>
    </header>
  );
}

import logo from "../assets/logo.svg";
import Button from "./Button";
import { navLink } from "../data/data";

export default function Nav() {
  return (
    <header>
      <nav className="flex items-center my-14 mx-12 md:mx-32 justify-between">
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
        <div className="flex md:hidden mt-[-0.5rem] flex-col gap-1">
          <div className="w-8 h-1 bg-Very-Dark-Blue rounded-sm"></div>
          <div className="w-8 h-1 bg-Very-Dark-Blue rounded-sm"></div>
          <div className="w-8 h-1 bg-Very-Dark-Blue rounded-sm"></div>
        </div>
      </nav>
    </header>
  );
}

import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-youtube.svg";
import tweeter from "../assets/icon-twitter.svg";
import pintrest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";
import { footerLink } from "../data/data";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-Very-Dark-Blue grid grid-cols-1 md:grid-cols-3 py-10 md:py-20  px-8 md:px-36">
      <div className="items-center order-4 flex md:order-1 md:block justify-center">
        <img className="my-4 md:my-0" src={logo} alt="company logo" />
      </div>
      <div className="row-span-2 order-2 md:order-2 flex items-center justify-center my-4 md:grid">
        <ul className="row-span-2  gap-x-10 gap-2 grid md:gap-x-32 grid-cols-2">
          {footerLink.map((link) => (
            <li
              className="text-white cursor-pointer my-1 text-lg font-semibold hover:text-Bright-Red duration-150 ease-in"
              key={link}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex order-1 md:order-3 items-center justify-center gap-4 outline-none mb-12">
        <input
          className="text-Bright-Red py-2 px-4 md:px-12 bg-white rounded-full"
          placeholder="Updates in your inbox…"
          type="text"
        />
        <Button classes="text-white">Go</Button>
      </div>
      <ul className="flex order-3 md:order-4 justify-center md:justify-start my-8 items-center gap-4">
        <li className="cursor-pointer">
          <img src={facebook} alt="facecobbok" />
        </li>
        <li className="cursor-pointer">
          <img src={youtube} alt="facecobbok" />
        </li>
        <li className="cursor-pointer">
          <img src={tweeter} alt="facecobbok" />
        </li>
        <li className="cursor-pointer">
          <img src={pintrest} alt="facecobbok" />
        </li>
        <li className="cursor-pointer">
          <img src={instagram} alt="facecobbok" />
        </li>
      </ul>
      <p className="text-white order-5 md:order-5 text-center">
        Copyright 2020. All Rights Reserved{" "}
      </p>
    </footer>
  );
}

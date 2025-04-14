import logo from "../assets/logo.svg";
import Button from "./Button";

export default function Nav() {
  const navLink = ["pricing", "product", "aboutUs", "careers", "comunity"];
  return (
    <nav className="flex items-center my-16 mx-32 justify-between">
      <img src={logo} alt="manage logo" />
      <ul className="flex items-center gap-8">
        {navLink.map((link) => (
          <li
            className="capitalize cursor-pointer hover:text-stone-700 duration-110 ease-in font-semibold"
            key={link}
          >
            {link}
          </li>
        ))}
      </ul>
      <Button>get started</Button>
    </nav>
  );
}

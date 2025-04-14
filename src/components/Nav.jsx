import logo from "../assets/logo.svg";
import Button from "./Button";

export default function Nav() {
  const navLink = ["pricing", "product", "about us", "careers", "comunity"];
  return (
    <nav className="">
      <img src={logo} alt="manage logo" />
      <ul>
        {navLink.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
      <Button>get started</Button>
    </nav>
  );
}

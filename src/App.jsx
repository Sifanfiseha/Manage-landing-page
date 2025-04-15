import Hero from "./components/Hero";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav></Nav>
      <main className="h-[1000px]">
        <Hero></Hero>
        <AboutUs></AboutUs>
        <Cta></Cta>
      </main>
    </>
  );
}

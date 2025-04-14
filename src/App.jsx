import Hero from "./components/Hero";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <>
      <Nav></Nav>
      <main className="h-[1000px]">
        <Hero></Hero>
        <AboutUs></AboutUs>
      </main>
    </>
  );
}

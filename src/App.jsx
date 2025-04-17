import Hero from "./components/Hero";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

export default function App() {
  return (
    <>
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <AboutUs></AboutUs>
        <Testimonial></Testimonial>
        <Cta></Cta>
      </main>
      <Footer></Footer>
    </>
  );
}

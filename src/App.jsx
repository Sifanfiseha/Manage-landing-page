import Hero from "./components/Hero";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <AboutUs></AboutUs>
        <Cta></Cta>
      </main>
      <Footer></Footer>
    </>
  );
}

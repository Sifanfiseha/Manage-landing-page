import heroImg from "../assets/illustration-intro.svg";
import Button from "./Button";

export default function Hero() {
  return (
    <section id="hero" className="items-center grid grid-cols-2 mx-32 gap-64">
      <dev>
        <h1 className="text-7xl font-bold my-12 text-Very-Dark-Blue">
          Bring everyone together to build better products.
        </h1>
        <p className="text-lg my-12 text-stone-500 max-w-md">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button>get started</Button>
      </dev>
      <div>
        <img src={heroImg} alt="illustration intro" />
      </div>
    </section>
  );
}

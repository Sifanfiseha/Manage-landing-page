import heroImg from "../assets/illustration-intro.svg";
import Button from "./Button";
import bgimg from "../assets/bg-tablet-pattern.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="items-center grid overflow-hidden grid-cols-1 md:grid-cols-2 place-items-center mx-12 md:mx-32 md:gap-44"
    >
      <img
        className="absolute -z-10 top-[-3%] md:top-[-20%] right-[-6%]"
        src={bgimg}
        alt="table pattern"
      />

      <div className="order-2 md:order-1">
        <h1 className="md:text-6xl text-4xl  text-center md:text-left font-bold my-12 text-Very-Dark-Blue">
          Bring everyone together to build better products.
        </h1>
        <p className="text-lg text-center md:text-left my-12 text-stone-500 max-w-md">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="flex w-full items-center justify-center md:block">
          <Button classes="text-white">get started</Button>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img className="w-full" src={heroImg} alt="illustration intro" />
      </div>
    </section>
  );
}

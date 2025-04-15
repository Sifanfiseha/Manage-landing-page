import Button from "./Button";
import bgimg from "../assets/bg-tablet-pattern.svg";

export default function Cta() {
  return (
    <section
      id="cta"
      className="flex overflow-hidden flex-col md:flex-row   z-0 py-20 md:px-36  bg-Bright-Red my-12 relative  items-center justify-between"
    >
      <img
        className="absolute opacity-10 z-10 top-[-3%] md:top-[-250%] right-[-30%]"
        src={bgimg}
        alt="table pattern"
      />
      <img
        className="absolute opacity-10 z-10 top-[-40%] md:top-[-5%] left-[-20%]"
        src={bgimg}
        alt="table pattern"
      />
      <h2 className="text-white z-5 font-bold  text-center py-12 md:py-0 md:text-left text-4xl md:max-w-md">
        Simplify how your team works today.
      </h2>
      <div className="flex items-center justify-center w-fit">
        <Button classes="bg-white text-Bright-Red">get started</Button>
      </div>
    </section>
  );
}

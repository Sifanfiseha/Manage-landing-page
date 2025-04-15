import { aboutUs } from "../data/data";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="my-20 md:my-52  md:mx-32 grid grid-cols-1 md:grid-cols-2"
    >
      <div className=" mx-8">
        <h2 className="text-xl md:text-5xl font-bold">
          What’s different about Manage?
        </h2>
        <p className="my-12 text-lg text-stone-500 md:max-w-md">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <ul className="justify-self-start flex flex-col gap-8">
        {aboutUs.map((info) => (
          <li key={info.id} className="flex flex-col items-start gap-1">
            <div className="flex ml-8 relative items-center gap-4">
              <div className="absolute md:hidden bg-orange-100 -z-90 top-0 left-2 bottom-0 right-[-12rem]"></div>
              <p className="bg-Bright-Red px-6 text-center text-white font-bold justify-self-auto text-lg py-2 rounded-full ">
                0{info.id}
              </p>
              <h3 className="md:text-[1.25rem] text-[1rem] my-1.5 font-bold">
                {info.title}
              </h3>
            </div>
            <div className="mx-8">
              <p className="my-4 pl-0 text-left md:pl-20  md:text-lg text-stone-500">
                {info.discription}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

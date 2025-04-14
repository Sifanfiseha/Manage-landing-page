import { aboutUs } from "../data/data";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="my-52 mx-8  md:mx-32 grid grid-cols-1 md:grid-cols-2"
    >
      <div>
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
            <div className="flex bg-Bright-Red items-center gap-4">
              <p className="bg-Bright-Red px-6 text-center text-white font-bold justify-self-auto text-lg py-2 rounded-full ">
                0{info.id}
              </p>
              <h3 className="md:text-[1.25rem]  my-1.5 font-bold">
                {info.title}
              </h3>
            </div>
            <div>
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

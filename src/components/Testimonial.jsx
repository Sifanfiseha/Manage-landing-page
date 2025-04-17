import { testimonialProfiles } from "../data/data";

export default function Testimonial() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3   mx-12 md:mx-32  items-center justify-center gap-20 ">
      {testimonialProfiles.map((profileInfo) => (
        <div className="bg-stone-100 p-12 relative" key={profileInfo.name}>
          <img
            className="md:w-24 w-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={profileInfo.profileImg}
            alt={profileInfo.name}
          />
          <p className="text-center text-Very-Dark-Blue font-bold text-lg my-4">
            {profileInfo.name}
          </p>
          <p className="text-center max-w-md">"{profileInfo.testimonial}"</p>
        </div>
      ))}
    </div>
  );
}

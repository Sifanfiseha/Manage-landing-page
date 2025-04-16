export default function Button({ children, classes = "", hoverEffect = "" }) {
  let classname;
  if (hoverEffect === "") {
    classname =
      " bg-Bright-Red z-50 px-6 cursor-pointer  py-3  hover:bg-amber-600 duration-130 ease-in  rounded-full uppercase font-semibold " +
      classes;
  } else {
    classname =
      " bg-Bright-Red z-50 px-6 cursor-pointer  py-3 duration-110 ease-in  rounded-full uppercase font-semibold " +
      hoverEffect;
  }
  return <button className={classname}>{children}</button>;
}

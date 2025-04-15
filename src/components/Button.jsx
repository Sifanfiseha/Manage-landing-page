export default function Button({ children, classes = "" }) {
  const classname =
    classes +
    " bg-Bright-Red z-50 px-6 cursor-pointer  py-3  hover:bg-amber-500 duration-110 ease-in  rounded-full uppercase font-semibold";
  return <button className={classname}>{children}</button>;
}

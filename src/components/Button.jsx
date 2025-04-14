export default function Button({ children, classes = "" }) {
  const classname =
    classes +
    " bg-Bright-Red px-6 cursor-pointer py-3 shadow-2xl hover:bg-amber-500 duration-110 ease-in shadow-md shadow-Bright-Red rounded-full text-white uppercase font-semibold";
  return <button className={classname}>{children}</button>;
}

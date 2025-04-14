export default function Button({ children }) {
  return (
    <button className="bg-Bright-Red px-6  py-3 shadow-2xl hover:bg-amber-500 duration-110 ease-in  shadow-Bright-Red rounded-full text-white uppercase font-semibold">
      {children}
    </button>
  );
}

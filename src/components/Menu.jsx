import { navLink } from "../data/data";
import { forwardRef } from "react";
import { useRef } from "react";
import { useImperativeHandle } from "react";

export default forwardRef(function Menu({ actions, isopen }, ref) {
  const modal = useRef();

  let classes;
  if (isopen) {
    classes =
      "fixed top-36 left-1/2 -translate-x-1/2 -translate-y-1/4 z-50 rounded-md shadow-xl bg-white p-6 w-80 max-w-md";
  } else {
    classes =
      "fixed top-36 left-1/2 -translate-x-1/2 -translate-y-1/4 z-50 rounded-md shadow-xl bg-white p-6 w-80 max-w-md hidden";
  }
  return (
    <div className={classes} ref={modal}>
      <ul className="flex justify-center items-center flex-col">
        {navLink.map((link) => (
          <li className="text-2xl font-semibold" key={link}>
            {link}
          </li>
        ))}
        {/* <form method="dialog" id="modal-actions">
          <button
            className="bg-Bright-Red  absolute px-4 py-2 rounded-full text-white text-lg font-semibold mt-4"
            type="submit"
          >
            {actions}
          </button>
        </form> */}
      </ul>
    </div>
  );
}, document.getElementById("modal"));

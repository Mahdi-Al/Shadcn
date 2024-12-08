// import React from "react";
import iconJs from "../help/images/js.png";
import iconTs from "../help/images/ts.png";
import iconReact from "../help/images/react.png";
import iconredux from "../help/images/redux.png";
import iconTalwind from "../help/images/tailwind.png";
import iconNext from "../help/images/nextjs.png";
const icons = [iconJs, iconTs, iconReact, iconredux, iconTalwind, iconNext];
export default function Footer() {
  return (
    <>
      <section className=" px-10 sm:px-20 md:px-36 lg:px-48 xl:px-60">
        <p className="text-center">Works with your technologies</p>
        <div className="flex justify-evenly mt-10">
          {icons.map((icon, inx) => (
            <img
              key={inx}
              className="hover:scale-125  transition-all"
              src={icon}
            />
          ))}
        </div>
      </section>
    </>
  );
}

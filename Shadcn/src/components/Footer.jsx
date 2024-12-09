// import React from "react";
import iconJs from "../help/images/js.png";
import iconTs from "../help/images/ts.png";
import iconReact from "../help/images/react.png";
import iconredux from "../help/images/redux.png";
import iconTalwind from "../help/images/tailwind.png";
import iconNext from "../help/images/nextjs.png";
const icons = [iconJs, iconTs, iconReact, iconredux, iconTalwind, iconNext];
import { Button } from "./ui/button";
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
        <div className="w-full m-3 bg-black text-white p-5 sm:p-10 lg:p-20 py-20 rounded-xl flex items-center gap-10 flex-col">
          <h2 className=" text-2xl  md:text-4xl  xl:text-6xl text-center w-full">
            Build faster websites
          </h2>
          <p>
            Pull content from anywhere and serve it fast with Astro&apos;s
            next-gen island architecture
          </p>
          <Button
            className={"bg-white mr-2 text-slate-950 border-solid border-2"}
          >
            Get Started
          </Button>
        </div>
      </section>
      <div className="py-20 flex flex-col items-center">
        <p className="text-md">Copyright © 2024. All rights reserved</p>
        <p className="text-sm">Made by Web3Templates</p>
      </div>
    </>
  );
}

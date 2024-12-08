import React from "react";
import { Button, buttonVariants } from "./ui/button";
import hero from "../help/images/hero-source.svg";
export default function HeroSection() {
  return (
    <>
      <section className=" sm:px-10 lg:px-20 flex flex-col-reverse lg:flex-row  justify-center items-center  mb-5 mt-24">
        <div className="flex flex-col">
          <h1 className=" text-2xl  md:text-4xl  xl:text-6xl font-bold">
            Scalable Apps with frameworks
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptate et neque earum iste hic consequatur nulla deserunt
            architecto numquam!
          </p>
          <div className="w-full flex flex-col md:flex-row gap-2 justify-center">
            <Button className={buttonVariants({ variant: "dark" })}>
              Download for free
            </Button>
            <Button
              className={"bg-white mr-2 text-slate-950 border-solid border-2"}
            >
              Github Repo
            </Button>
          </div>
        </div>
        <img src={hero} className="w-[700px]" alt="hero img" />
      </section>
    </>
  );
}

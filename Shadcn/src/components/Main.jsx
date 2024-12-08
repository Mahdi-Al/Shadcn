import React from "react";
const srCartImg = [
  "https://img.icons8.com/stickers/100/performance-2.png",
  "https://img.icons8.com/nolan/64/request-service.png",
  "https://img.icons8.com/color/48/design--v1.png",
  "https://img.icons8.com/3d-fluency/94/deployment.png",
  "https://img.icons8.com/color/48/combine.png",
  "https://img.icons8.com/color/48/checked-identification-documents.png",
];
export default function Main() {
  return (
    <>
      <section className="px-5 sm:px-10 lg:px-20 mt-20">
        <h2 className=" text-2xl  md:text-4xl  xl:text-4xl  font-semibold">
          Everything you need to start a website
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          consequuntur.
        </p>
        <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:gap-10 ">
          {srCartImg.map((src, inx) => (
            <div
              key={inx}
              className="mb-10 flex flex-col gap-2 hover:shadow-xl p-10 transition-all"
            >
              <div>
                <img className="w-24 m-auto" src={src} alt={src} />
              </div>
              <h4 className="text-xl font-medium">Performance Optimization</h4>
              <p className="text-gray text-sm">
                Enhancing React apps by minimizing re-renders, lazy loading
                components, and utilizing memoization techniques for improved
                performance and speed.
              </p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

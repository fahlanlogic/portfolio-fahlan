/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

export const RecentProjects = () => {
  return (
    <div className="py-20">
      <div className="mx-auto text-center">
        <h1 className="heading text-3xl lg:text-5xl font-bold">
          A small selection of{" "}
          <span className="text-yellow-300">my recent projects</span>
        </h1>
      </div>
      <div className="flex flex-col p-4 mt-10 gap-x-24 gap-y-7 md:flex-row justify-center items-center flex-wrap">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
            <PinContainer
              title={title}
              containerClassName="w-96">
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img
                    src="/bg.png"
                    alt="bg-img"
                  />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="text-xs md:text-sm mt-2 line-clamp-2 font-light">
                {des}
              </p>
              <div className="flex items-center mt-7 mb-3 justify-between">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="p-2 border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                      <img
                        src={icon}
                        alt={icon}
                        className=""
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center text-sm text-yellow-300 sm:text-base">
                  <p>Check Live Site</p>
                  <FaLocationArrow className="ms-3" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

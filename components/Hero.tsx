import React from 'react';
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { WavyBackground } from "./ui/WavyBackground";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="">
      <div>
        <WavyBackground
          className="z-50"
          backgroundFill="#000319"
          waveWidth={100}
          colors={["#E6E6E6", "#5C7AEA", "#3D56B2", "#14279B", "#14279B"]}>
          <div className="text-center relative mb-8 md:text-lg tracking-wide font-mono flex flex-col sm:flex-row gap-14 sm:gap-36 justify-center md:gap-40 xl:gap-40">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              welcome to
            </motion.h2>{" "}
            <span className="fahlanlogic translate-x-1/2 right-1/2 bg-white font-semibold text-blue-800 p-1 absolute -rotate-3 sm:translate-x-[55%] sm:-top-1">
              fahlanlogic
            </span>
            <h2>portfolio</h2>
          </div>
          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless Experiences"
          />
        </WavyBackground>
      </div>
    </main>
  );
};

export default Hero;

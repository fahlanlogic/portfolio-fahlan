"use client";

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TextGenerateEffectParagraph } from "./ui/TextGenerateEffectParagraph";
import { WavyBackground } from "./ui/WavyBackground";
import { motion as m } from "framer-motion";

const Hero = () => {
  return (
    <main className="">
      <WavyBackground
        className="z-50"
        backgroundFill="#000319"
        waveWidth={100}
        colors={["#fde047", "#5C7AEA", "#3D56B2", "#14279B", "#14279B"]}>
        {/* <div className="text-center gap-2 relative text-sm md:text-lg tracking-wide font-mono flex sm:gap-4 justify-center">
            <m.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}>
              welcome to
            </m.h2>
            <m.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="fahlanlogic w-fit translate-x-1/2 right-1/2 font-semibold">
              fahlanlogic
            </m.span>
            <m.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}>
              portfolio
            </m.h2>
          </div> */}
        <div className="space-y-8">
          <TextGenerateEffect
            className="text-center uppercase text-sm tracking-widest md:text-lg font-light"
            words="dynamic web magic with next.js"
          />
          <TextGenerateEffect
            className="text-center font-mono uppercase text-[40px] md:text-5xl lg:text-6xl tracking-wide"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <TextGenerateEffectParagraph
            className="text-center text-sm md:text-lg uppercase tracking-widest"
            words="Hi! I'm Fahlan, Fullstack Developer based in Batam"
          />
        </div>
        <m.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          <a href="#">
            <MagicButton
              title="Show My Work"
              position="right"
              icon={<FaLocationArrow />}
            />
          </a>
        </m.div>
      </WavyBackground>
    </main>
  );
};

export default Hero;

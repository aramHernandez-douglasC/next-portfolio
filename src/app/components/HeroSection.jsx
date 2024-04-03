"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="lg:py-16 mt-20 mx-4">
      <h1 className="text-center tracking-widest text-wrap mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        Hello World!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-6 place-self-center text-center sm:text-left lg:justify-self-start"
        >
          {/* FIXME: Probably send this to a specifc div, medium screens look weird with the image*/}
          <h2 className=" text-white-blue-shadow mb-4 text-xl sm:text-2xl lg:text-4xl lg:leading-normal font-medium">
            I'm <span className='font-extrabold'> Aram </span> a freelance{"\n"}
            <TypeAnimation
            className="h-[82px] md:h-[40px] md:mt-4"
              sequence={[
                "",
                1000,
                "Web Developer",
                1000,
                "Software Engineer",
                1000,
                "Back-end Developer",
                1000,
                "Front-end Developer",
                1000,
                "Full-stack Developer",
                1000,
              ]}
              style={{
                fontSize: "36px",
                fontFamily: "monospace",
                lineHeight: "40px",
                display:"inline-block",
                width: "100%",
                // height:"82px",
                color: "#05F2AF",
                overflow: "hidden",
              }}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
            based in Vancouver 
          </h2>
          <div className="w-full sm:w-full">
            <Button className="md:basis-1/2 px-6 py-3 bg-pink-fairy-tale text-white hover:bg-slate-400 hover:text-black">
              Contact Me!
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-6 place-self-center mt-4 lg:mt-0"
        >
          <motion.div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            {/** TODO: Probably change to a spline design */}
            <Image
              src="/images/hero-avatar.png"
              alt="Avatar Image"
              width={300}
              height={500}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 circular-square"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

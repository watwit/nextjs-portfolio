import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Social from "./social";
import { motion } from "framer-motion";

export default function about() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.1 }}
      id="about"
      className="bg-primary w-full min-h-screen pt-[80px] sm:h-screen text-center"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="lg:text-start order-2 lg:order-none">
          <h4>Hello, I'm 👋</h4>
          <h1 className="pt-5 text-tertiary text-4xl lg:text-5xl">
            Watcharawit Yuthong
          </h1>
          <h4 className="py-2">
            <Typewriter
              options={{
                strings: ["A Software Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>

          <p className="text-lg py-4">
            I'm a software developer to produce scalable software solutions. I
            am a part of a cross-functional team that’s responsible for the full
            software development life cycle, from conception to deployment.
          </p>

          <div className="hidden lg:flex w-full max-w-[240px] h-[2px] bg-white mt-20"></div>
          <div className="hidden lg:flex items-center justify-between max-w-[240px] py-8">
            <Social />
          </div>
        </div>
        <Image
          className="order-1 lg:order-none"
          src="/images/programming.svg"
          width={550}
          height={550}
          alt="Coding Logo"
        ></Image>
      </div>
    </motion.div>
  );
}

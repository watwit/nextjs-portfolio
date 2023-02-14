import React, { useState } from "react";
import Cardslider from "./cardslider";
import { motion } from "framer-motion";

export default function project() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.1 }}
      id="project"
      className="max-w-[1240px] w-full flex justify-evenly items-center flex-wrap mx-auto p-4 scroll-mt-20 text-center min-h-screen flex-col"
    >
      <div className="w-full">
        <h2 className="py-4 w-full">Projects</h2>
        <p className="pb-4 w-full">Check my projects</p>
      </div>

      <div className="w-full my-8">
        <Cardslider />
      </div>
    </motion.div>
  );
}

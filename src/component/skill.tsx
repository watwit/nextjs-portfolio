import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { skillData } from "@/data/skill.data";

export default function skill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.1 }}
      id="skill"
      className="main-container"
    >
      <div className="w-full">
        <h2 className="py-4 w-full">Skills</h2>
        <p className="pb-4 w-full">My technical skills</p>
      </div>

      <div className="w-full flex justify-center items-center flex-wrap gap-4 my-8">
        {skillData.map((data) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="bg-secondary p-6 w-36 h-36 rounded-full flex flex-col justify-between items-center"
              key={data.id}
            >
              <Image src={data.image} width={60} height={60} alt={data.alt} />
              <p>{data.caption}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type SkillDataType = {
  id: number;
  image: string;
  alt: string;
  caption: string;
}[];

const skillData: SkillDataType = [
  {
    id: 1,
    image: "/images/python.png",
    alt: "python logo",
    caption: "python",
  },
  {
    id: 2,
    image: "/images/java.png",
    alt: "java logo",
    caption: "java",
  },
  {
    id: 3,
    image: "/images/javascript.png",
    alt: "javascript logo",
    caption: "javascript",
  },
  {
    id: 4,
    image: "/images/cpp.png",
    alt: "c++ logo",
    caption: "c++",
  },
  {
    id: 5,
    image: "/images/html&css.png",
    alt: "html&css logo",
    caption: "html&css",
  },
  {
    id: 6,
    image: "/images/python.png",
    alt: "python logo",
    caption: "python",
  },
  {
    id: 7,
    image: "/images/java.png",
    alt: "java logo",
    caption: "java",
  },
  {
    id: 8,
    image: "/images/javascript.png",
    alt: "javascript logo",
    caption: "javascript",
  },
  {
    id: 9,
    image: "/images/cpp.png",
    alt: "c++ logo",
    caption: "c++",
  },
  {
    id: 10,
    image: "/images/html&css.png",
    alt: "html&css logo",
    caption: "html&css",
  },
];

export default function skill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.1 }}
      id="skill"
      className="max-w-[1024px] w-full flex justify-center items-center flex-wrap mx-auto p-4 scroll-mt-20 text-center"
    >
      <h2 className="py-4 w-full">Skills</h2>
      <p className="pb-4 w-full">My technical skills</p>

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

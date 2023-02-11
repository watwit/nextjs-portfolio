import React from "react";
import Image from "next/image";

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
    <div
      id="skill"
      className="bg-secondary w-full flex flex-col text-center scroll-mt-20"
    >
      <div className="max-w-[1024px] w-full flex justify-center items-center flex-wrap mx-auto p-4">
        <h2 className="text-4xl pb-4 pt-2 w-full">My Skill</h2>
        <div className="w-full max-w-[240px] h-[2px] bg-white mb-6" />
        <div className="w-full flex justify-center items-center flex-wrap gap-4">
          {skillData.map((data) => {
            return (
              <div
                className="bg-primary p-4 w-36 h-36 rounded-md flex flex-col justify-between items-center"
                key={data.id}
              >
                <Image src={data.image} width={60} height={60} alt={data.alt} />
                <p>{data.caption}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

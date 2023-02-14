import React from "react";
import { BsCalendar4Event } from "react-icons/bs";
import { motion } from "framer-motion";

export default function experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.1 }}
      id="experience"
      className="max-w-[1024px] w-full flex justify-center items-center flex-wrap mx-auto p-4 scroll-mt-20 text-center"
    >
      <h2 className="py-4 w-full">Experiences</h2>
      <p className="pb-4 w-full">My personal journey</p>

      <ol className="relative border-l-[2px] border-white border-dashed m-8">
        <li className="mb-10 ml-2 pl-10 text-left">
          <div className="absolute w-5 h-5 bg-tertiary rounded-full shadow-lg shadow-tertiary -left-3" />
          <time className="mb-1 text-sm leading-none flex gap-2 items-center">
            <BsCalendar4Event />
            Mar 2022 - Present
          </time>
          <h6 className="mt-6">CPF IT (Software Developer)</h6>
          <p className="mt-1">
            - Writing and testing code for new programs.
            <br />
            - Updating existing programs.
            <br />
            - Identifying and correcting coding errors.
            <br />
            - Rewriting programs for different operating systems.
            <br />- Secure program against cybersecurity threats.
          </p>
        </li>
        <li className="mb-10 ml-2 pl-10 text-left">
          <div className="absolute w-5 h-5 bg-tertiary rounded-full shadow-lg shadow-tertiary -left-3" />
          <time className="mb-1 text-sm leading-none flex gap-2 items-center">
            <BsCalendar4Event />
            Apr 2021 - Mar 2022
          </time>
          <h6 className="mt-6">Mitsubishi Motor Thailand (Programmer)</h6>
          <p className="mt-1">
            - Develop web applications to support IoT projects using IoT
            platforms.
            <br />
            - Support implementation projects.
            <br />
            - Design data model and database schema.
            <br />- Tester, Project Coordinator, Trainer.
          </p>
        </li>
        <li className="mb-10 ml-2 pl-10 text-left">
          <div className="absolute w-5 h-5 bg-tertiary rounded-full shadow-lg shadow-tertiary -left-3" />
          <time className="mb-1 text-sm leading-none flex gap-2 items-center">
            <BsCalendar4Event />
            Nov 2020 - Mar 2021
          </time>
          <h6 className="mt-6">Mitsubishi Motor Thailand (Internship)</h6>
          <p className="mt-1">
            - Develop web applications to support IoT projects using IoT
            platforms.
            <br />
            - Design UX/UI, data model and database schema, Tester.
            <br />- Get user requirements, System Analyst.
          </p>
        </li>
      </ol>
    </motion.div>
  );
}

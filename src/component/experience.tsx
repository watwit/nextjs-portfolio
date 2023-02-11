import React from "react";

export default function experience() {
  return (
    <div
      id="experience"
      className="bg-secondary w-full text-center scroll-mt-20"
    >
      <div className="max-w-[1240px] w-full flex justify-center items-center flex-wrap mx-auto p-4">
        <div className="pb-4 pt-2 w-full mx-auto">
          <div className="relative top-14 w-[80%] h-[2px] bg-white mb-6 mx-auto" />
          <h2 className="relative p-3 w-fit bg-tertiary mx-auto">
            My Experience
          </h2>
        </div>

        <ol className="relative border-l-[2px] border-white border-dashed m-8">
          <li className="mb-10 ml-2 pl-10 text-left">
            <div className="absolute w-5 h-5 bg-tertiary rounded-full shadow-lg shadow-tertiary -left-3" />
            <time className="mb-1 text-sm leading-none">
              Mar 2022 - Present
            </time>
            <h6 className="mt-4">CPF IT (Software Developer)</h6>
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
            <time className="mb-1 text-sm leading-none">
              Apr 2021 - Mar 2022
            </time>
            <h6 className="mt-4">Mitsubishi Motor Thailand (Programmer)</h6>
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
            <time className="mb-1 text-sm leading-none">
              Nov 2020 - Mar 2021
            </time>
            <h6 className="mt-4">Mitsubishi Motor Thailand (Internship)</h6>
            <p className="mt-1">
              - Develop web applications to support IoT projects using IoT
              platforms.
              <br />
              - Design UX/UI, data model and database schema, Tester.
              <br />- Get user requirements, System Analyst.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

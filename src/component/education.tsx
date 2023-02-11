import React from "react";
import Image from "next/image";
import { BsCalendar4Event } from "react-icons/bs";
import { motion } from "framer-motion";

export default function education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.1 }}
      id="education"
      className="max-w-[1024px] w-full flex justify-center items-center flex-wrap mx-auto p-4 text-center scroll-mt-20"
    >
      <h2 className="py-4 w-full">Educations</h2>
      <p className="pb-4 w-full">xxxxxxxx</p>

      <div className="w-full flex justify-center items-stretch flex-wrap gap-8 my-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative max-w-md w-full rounded-2xl bg-secondary p-8 text-start"
        >
          <time className="absolute -top-4 left-8 bg-secondary rounded-2xl py-2 px-4 flex gap-2 items-center">
            <BsCalendar4Event />
            2017-2021
          </time>
          <Image
            className="mt-2"
            src={"/images/ku-logo.png"}
            width={80}
            height={80}
            alt="ku logo"
          ></Image>
          <h5 className="mt-3">Kasetsart University Sriracha Campus</h5>
          <h6 className="mb-3">Computer Engineering</h6>

          <p>- Graduated with GPA of 3.56</p>
          <p>- First-class honors.</p>
          <p>- Academic result 5A 2/2020</p>
          <p>- Academic result 5A 1/2020</p>
          <p>- Medal for excellent academic performance (2019)</p>
          <p>- Academic result 5A 2/2019</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative max-w-md w-full rounded-2xl bg-secondary p-8 text-start"
        >
          <time className="absolute -top-4 left-8 bg-secondary rounded-2xl py-2 px-4 flex gap-2 items-center">
            <BsCalendar4Event />
            2014-2017
          </time>
          <Image
            className="mt-2"
            src={"/images/bspwit-logo.png"}
            width={80}
            height={80}
            alt="bspwit logo"
          ></Image>
          <h5 className="mt-3">Bangsaphanwittaya School</h5>
          <h6 className="mb-3">Sciences and Mathematic</h6>

          <p>- Graduated with GPA of 2.89</p>
        </motion.div>
      </div>
    </motion.div>

    // <div id="education" className="bg-primary w-full text-center scroll-mt-20">
    //   <div className="max-w-[1024px] w-full flex justify-center items-center flex-wrap mx-auto p-4">
    //     <h2 className="pb-4 pt-2 w-full mb-6">Education</h2>

    //     <div className="w-full flex justify-center items-stretch flex-wrap gap-8 pb-4">
    //       <div className="relative max-w-md w-full border-[2px] rounded-lg border-tertiary p-8 text-start">
    //         <time className="absolute -top-4 left-8 bg-tertiary py-[2px] px-1">
    //           2017-2021
    //         </time>
    //         <Image
    //           src={"/images/ku-logo.png"}
    //           width={80}
    //           height={80}
    //           alt="ku logo"
    //         ></Image>
    //         <h5 className="mt-3">Kasetsart University Sriracha Campus</h5>
    //         <h6 className="mb-3">Computer Engineering</h6>

    //         <p>- Graduated with GPA of 3.56</p>
    //         <p>- First-class honors.</p>
    //         <p>- Academic result 5A 2/2020</p>
    //         <p>- Academic result 5A 1/2020</p>
    //         <p>- Medal for excellent academic performance (2019)</p>
    //         <p>- Academic result 5A 2/2019</p>
    //       </div>

    //       <div className="relative max-w-md w-full border-[2px] rounded-lg border-tertiary p-8 text-start">
    //         <time className="absolute -top-4 left-8 bg-tertiary py-[2px] px-1">
    //           2014-2017
    //         </time>
    //         <Image
    //           src={"/images/bspwit-logo.png"}
    //           width={80}
    //           height={80}
    //           alt="bspwit logo"
    //         ></Image>
    //         <h5 className="mt-3">Bangsaphanwittaya School</h5>
    //         <h6 className="mb-3">Sciences and Mathematic</h6>

    //         <p>- Graduated with GPA of 2.89</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

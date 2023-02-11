import React from "react";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaFacebook, FaLine, FaPhoneSquareAlt, FaGithub } from "react-icons/fa";

export default function contract() {
  return (
    <div id="contract" className="bg-secondary w-full text-center scroll-mt-20">
      <div className="max-w-[1024px] w-full flex justify-center items-center flex-wrap mx-auto p-4">
        <h2 className="text-4xl pb-4 pt-2 w-full">Contract Me</h2>
        <div className="flex justify-center flex-wrap gap-4 w-full my-8">
          <div className="bg-primary p-4 flex gap-4 rounded-xl max-w-[340px] w-full">
            <MdEmail size={25} color={"#fff"} />
            <p>watcharawit.yuthong123@gmail.com</p>
          </div>
          <div className="bg-primary p-4 flex gap-4 rounded-xl max-w-[340px] w-full">
            <FaPhoneSquareAlt size={25} color={"#fff"} />
            <p>0983412687</p>
          </div>
          <div className="bg-primary p-4 flex gap-4 rounded-xl max-w-[340px] w-full">
            <MdLocationPin size={30} color={"#fff"} className="w-[50px]" />
            <p className="text-start">
              204/89 M.6, Censiri Town, Thung Sukhla, Sriracha, Chonburi, 20230
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

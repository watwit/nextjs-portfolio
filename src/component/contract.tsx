import React from "react";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function contract() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    window.location.href = `mailto:watcharawit.yuthong123@gmail.com?sublect=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.1 }}
      id="contract"
      className="max-w-[1024px] w-full flex justify-center items-center flex-wrap mx-auto p-4 scroll-mt-20 text-center min-h-screen flex-col"
    >
      <div className="w-full">
        <h2 className="py-4 w-full">Contracts</h2>
        <p className="pb-4 w-full">Get in touch</p>
      </div>

      <div className="flex justify-center flex-wrap gap-10 w-full my-8">
        <div className="flex flex-col gap-4 items-center">
          <h5 className="font-normal">Talk to me</h5>
          <div className="bg-secondary p-4 flex gap-4 rounded-2xl max-w-[340px] w-full">
            <MdEmail size={25} color={"#fff"} />
            <p>watcharawit.yuthong123@gmail.com</p>
          </div>
          <div className="bg-secondary p-4 flex gap-4 rounded-2xl max-w-[340px] w-full">
            <FaPhoneSquareAlt size={25} color={"#fff"} />
            <p>0983412687</p>
          </div>
          <div className="bg-secondary p-4 flex gap-4 rounded-2xl max-w-[340px] w-full">
            <MdLocationPin size={30} color={"#fff"} className="w-[50px]" />
            <p className="text-start">
              204/89 M.6, Censiri Town, Thung Sukhla, Sriracha, Chonburi, 20230
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-center"
        >
          <h5 className="font-normal">Tell me about you</h5>

          <input
            {...register("name")}
            className=" bg-secondary w-[340px] p-4 rounded-2xl"
            type="text"
            placeholder="Name"
            required
          />
          <input
            {...register("email")}
            className=" bg-secondary w-[340px] p-4 rounded-2xl"
            type="email"
            placeholder="Email"
            required
          />
          <input
            {...register("subject")}
            className=" bg-secondary w-[340px] p-4 rounded-2xl"
            type="text"
            placeholder="Subject"
            required
          />
          <textarea
            {...register("message")}
            className=" bg-secondary w-[340px] p-4 rounded-2xl min-h-[100px]"
            placeholder="Message"
            required
          />
          <button
            className="btn-tertiary w-full p-4 flex justify-center gap-2"
            type="submit"
          >
            Send message <TbSend size={25} color={"#29333D"} />
          </button>
        </form>
      </div>
    </motion.div>
  );
}

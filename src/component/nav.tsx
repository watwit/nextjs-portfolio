import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaLine, FaPhoneSquareAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AnimateSharedLayout, motion } from "framer-motion";
import { navMenuData } from "@/data/nav.data";

export default function nav() {
  const [nav, setNav] = useState<boolean>(false);
  const [selectMenu, setSelectMenu] = useState<string>("/");
  const router = useRouter();
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    setSelectMenu(router.asPath);
  }, [router]);

  return (
    <nav className="bg-primary fixed w-full h-20 shadow-xl z-[100]">
      <div className="xl:container xl:mx-auto flex items-center justify-between px-4 w-full h-full">
        <motion.div
          initial={{ x: -200, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/code.png"
              width={50}
              height={50}
              alt="Software Developer Logo"
            />
            <span className="hidden lg:flex self-center text-xl font-semibold whitespace-nowrap">
              Software Developer
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <AnimateSharedLayout>
              <div className="hidden lg:flex lg:gap-2">
                {navMenuData.map((data) => {
                  return (
                    <Link
                      key={data.id}
                      href={data.href}
                      className="mr-6 flex flex-col relative nav-manu"
                    >
                      {data.name}
                      {selectMenu == data.href && (
                        <motion.div
                          layoutId="nav-manu-active"
                          className="nav-manu-active"
                          animate
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </AnimateSharedLayout>
            <button className="btn-tertiary">Download CV</button>

            <div onClick={handleNav} className="lg:hidden">
              <AiOutlineMenu size={25} color={"#fff"} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Nav Responsive */}
      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full max-w-[286px] h-screen bg-primary p-6 ease-in duration-300"
              : "fixed left-[-100%] top-0ease-in duration-300"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image
              src="/images/code.png"
              width={50}
              height={50}
              alt="Software Developer Logo"
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-tertiary p-3 cursor-pointer"
            >
              <AiOutlineClose size={25} color={"#fff"} />
            </div>
          </div>

          <div className="h-full flex flex-col justify-between">
            <div className="py-4 flex flex-col">
              {navMenuData.map((data) => {
                return (
                  <Link
                    key={data.id}
                    href={data.href}
                    className="py-2 flex flex-col relative z-10"
                  >
                    {selectMenu == data.href ? (
                      <motion.div
                        layoutId="nav-manu-mobile-active"
                        className="nav-manu-mobile-active"
                        animate
                      >
                        {data.name}
                      </motion.div>
                    ) : (
                      <p className="nav-manu-mobile">{data.name}</p>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="py-10">
              <p className="text-tertiary text-md font-semibold">
                Let's Connect :
              </p>
              <div className="flex items-center justify-between my-4 w-full">
                <div className="cursor-pointer hover:scale-125 ease-in duration-300">
                  <FaFacebook size={25} color={"#fff"} />
                </div>
                <div className="cursor-pointer hover:scale-125 ease-in duration-300">
                  <FaLine size={25} color={"#fff"} />
                </div>
                <div className="cursor-pointer hover:scale-125 ease-in duration-300">
                  <FaPhoneSquareAlt size={25} color={"#fff"} />
                </div>
                <div className="cursor-pointer hover:scale-125 ease-in duration-300">
                  <MdEmail size={30} color={"#fff"} />
                </div>
                <div className="cursor-pointer hover:scale-125 ease-in duration-300">
                  <FaGithub size={25} color={"#fff"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";
import { motion } from "framer-motion";
import Scrollbutton from "./scrollbutton";

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <div className="bg-primary text-tertiary">
      <Head>
        <title>Software Developer</title>
        <meta
          name="description"
          content="I'm a software developer to produce scalable software solutions. I
            am a part of a cross-functional team that’s responsible for the full
            software development life cycle, from conception to deployment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/code.ico" />
      </Head>
      <Nav />
      {children}
      <Scrollbutton />
      <Footer />
    </div>
  );
}

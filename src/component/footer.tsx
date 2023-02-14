import React from "react";
import Social from "./social";
import { motion } from "framer-motion";

export default function footer() {
  return (
    <footer className="bg-secondary w-full text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        className="max-w-[1240px] w-full h-full mx-auto px-4 py-10 text-center"
      >
        <h3>Thanks for Scrolling</h3>

        <div className="flex justify-center items-center py-8 gap-8">
          <Social />
        </div>

        <p className="mt-4">© Copyright 2023. All rigths reserved</p>
      </motion.div>
    </footer>
  );
}

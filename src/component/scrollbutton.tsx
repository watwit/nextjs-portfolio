import React, { useState, useEffect } from "react";
import { SlArrowUpCircle } from "react-icons/sl";

export default function scrollbutton() {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    console.log(document.documentElement.scrollTop);
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      className={`fixed right-10 bottom-10 text-sm z-10 cursor-pointer btn-tertiary ${
        visible ? "inline" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <SlArrowUpCircle size={25} />
    </button>
  );
}

import { FaFacebook, FaLine, FaPhoneSquareAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function social() {
  return (
    <>
      <a
        className="cursor-pointer hover:scale-150 ease-in duration-300"
        href="https://www.facebook.com/msmall7"
        target="_blank"
      >
        <FaFacebook size={25} color={"#fff"} />
      </a>

      <a
        className="cursor-pointer hover:scale-150 ease-in duration-300"
        href="tel:+66983412687"
      >
        <FaPhoneSquareAlt size={25} color={"#fff"} />
      </a>

      <a
        className="cursor-pointer hover:scale-150 ease-in duration-300"
        href="mailto:watcharawit.yuthong123@gmail.com"
      >
        <MdEmail size={30} color={"#fff"} />
      </a>

      <a
        className="cursor-pointer hover:scale-150 ease-in duration-300"
        href={"https://github.com/watwit?tab=repositories"}
        target="_blank"
      >
        <FaGithub size={25} color={"#fff"} />
      </a>
    </>
  );
}

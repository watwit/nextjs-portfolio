import { Inter } from "@next/font/google";
import Layout from "../component/layout";
import About from "@/component/about";
import Skill from "@/component/skill";
import Experience from "@/component/experience";
import Education from "@/component/education";
import Project from "@/component/project";
import Contract from "@/component/contract";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <About />
      <Skill />
      <Education />
      <Experience />
      <Project />
      <Contract />
    </Layout>
  );
}

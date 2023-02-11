import React, { useState } from "react";
import Image from "next/image";
import Projectcard from "@/component/projectcard";
import { projectData } from "@/data/project.data";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

type TabDataType = {
  label: string;
  value: string;
}[];

const tabs: TabDataType = [
  {
    label: "All",
    value: "0",
  },
  {
    label: "Personal Projects",
    value: "1",
  },
  {
    label: "Professional Projects",
    value: "2",
  },
];

export default function project() {
  const [selectedIndex, setSelectedIndex] = useState<string>("0");

  return (
    <div id="project" className="bg-primary w-full text-center scroll-mt-20">
      <div className="max-w-[1240px] w-full flex justify-center items-center flex-wrap mx-auto p-4">
        <div className="flex justify-between w-full pb-4 pt-2 flex-wrap gap-4">
          <h2>Projects</h2>
          <ul className="flex bg-white rounded-lg p-1 gap-1 w-full  lg:max-w-[580px]">
            {tabs.map((tab) => (
              <li
                key={tab.label}
                className={`cursor-pointer font-medium text-lg flex justify-center py-1 px-2 w-full ${
                  selectedIndex === tab.value
                    ? " bg-tertiary rounded-lg shadow text-white"
                    : "text-primary hover:rounded-lg hover:shadow hover:bg-tertiary hover:text-white hover:transition-all ease delay-100"
                }`}
                onClick={() => setSelectedIndex(tab.value)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex justify-center items-stretch flex-wrap gap-x-6 gap-y-14 pt-12 pb-8">
          <Projectcard projectData={projectData} type={selectedIndex} />
        </div>
      </div>
    </div>
  );
}

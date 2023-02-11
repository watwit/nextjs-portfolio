import React from "react";
import Image from "next/image";
import { ProjectType } from "@/interface/project.type";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

type Props = {
  projectData: ProjectType;
  type: string;
};

export default function projectcard(props: Props) {
  return (
    <>
      {props.projectData.map((data) => {
        return (
          (data.type == props.type || props.type == "0") && (
            <Card className="w-96 flex flex-col" key={data.id}>
              <CardHeader color="blue" className="relative h-56">
                <Image
                  className="w-full h-60 object-cover hover:scale-110 duration-300 cursor-pointer"
                  width={1000}
                  height={1000}
                  src={data.image}
                  alt="Sunset in the mountains"
                />
              </CardHeader>
              <CardBody className="text-center mb-12">
                <h6 className="mb-2 text-primary text-start">{data.header}</h6>
                <div className="text-start">
                  <ol>
                    {data.details.map((detail: string) => {
                      return (
                        <li
                          className="text-primary text-base pt-[6px]"
                          key={detail}
                        >
                          {detail}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-between py-3 absolute shrink-0 bottom-0 left-0 right-0"
              >
                <div>
                  {data.tools.map((tool: string) => {
                    return (
                      <span
                        className="text-sm font-semibold text-secondary mr-2 mb-2"
                        key={tool}
                      >
                        #{tool}
                      </span>
                    );
                  })}
                </div>
              </CardFooter>
            </Card>
          )
        );
      })}
    </>
  );
}

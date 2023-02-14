import React, { Fragment } from "react";
import Carousel from "react-elastic-carousel";
import { ProjectType, ProjectImageType } from "@/interface/project.type";
import Image from "next/image";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

type Props = {
  setOpenModal: Function;
  projectData: ProjectType;
};

const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default function modal({ setOpenModal, projectData }: Props) {
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  return (
    <StyledDialog
      open={true}
      onClose={() => setOpenModal(false)}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      PaperProps={{
        style: { borderRadius: 16 },
      }}
    >
      <div className="bg-primary">
        <DialogTitle
          id="scroll-dialog-title"
          className="font-kanit text-tertiary"
        >
          <div className="flex justify-between">
            <h5>{projectData.header}</h5>
            <div>
              <button onClick={() => setOpenModal(false)}>
                <AiOutlineClose size={25} color={"#fff"} />
              </button>
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Carousel showArrows={false} enableMouseSwipe={false}>
              {projectData.imagelist.map((data: ProjectImageType) => {
                return (
                  <div
                    style={{ aspectRatio: "16/9" }}
                    className="overflow-hidden"
                  >
                    <Image
                      className="object-cover cursor-pointer"
                      src={data.image}
                      alt={data.alt}
                      layout="responsive"
                      width={1920}
                      height={1080}
                    />
                  </div>
                );
              })}
            </Carousel>
            <ol className="mt-4">
              {projectData.details.map((detail: string) => {
                return (
                  <li
                    className="mb-3 text-quaternary font-normal text-start font-kanit"
                    key={detail}
                  >
                    {detail}
                  </li>
                );
              })}
            </ol>
          </DialogContentText>
        </DialogContent>
        <div className="w-full h-[1px] bg-tertiary" />
        <DialogContent>
          <div className="flex items-center flex-wrap py-1 gap-2">
            {projectData.tools.map((tool: string) => {
              return (
                <span
                  className="text-sm font-semibold text-secondary bg-tertiary p-1 rounded-2xl"
                  key={tool}
                >
                  # {tool}
                </span>
              );
            })}
          </div>
        </DialogContent>
      </div>
    </StyledDialog>
  );
}

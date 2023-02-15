import React, { useState } from "react";
import Image from "next/image";
import Modal from "@/component/modal";
import { ProjectType } from "@/interface/project.type";
type Props = {
  projectData: ProjectType;
};

export default function card({ projectData }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="max-w-sm bg-secondary rounded-2xl shadow h-[500px] md:h-[580px] relative">
        <div
          style={{ aspectRatio: "16/9" }}
          className="rounded-t-2xl overflow-hidden"
        >
          <Image
            className="object-cover hover:scale-110 duration-300 cursor-pointer rounded-t-2xl"
            src={projectData.image}
            alt={projectData.alt}
            width={1920}
            height={1080}
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight">
            {projectData.header}
          </h5>
          <ol className="overflow-y-hidden display-webkit-box text-overflow-ellipsis h-32 md:h-40">
            {projectData.details.map((detail: string) => {
              return (
                <li
                  className="mb-3 text-quaternary font-normal text-start"
                  key={detail}
                >
                  {detail}
                </li>
              );
            })}
          </ol>
          <div className="flex items-center justify-center py-3 absolute left-0 bottom-4 w-full">
            <button className="btn-tertiary" onClick={() => setShowModal(true)}>
              Read more
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal setOpenModal={setShowModal} projectData={projectData} />
      )}
    </>
  );
}

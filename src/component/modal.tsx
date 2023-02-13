import React, { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

type Props = {
  setOpenModal: Function;
};

export default function modal({ setOpenModal }: Props) {
  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog
        open={true}
        handler={() => setOpenModal(true)}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size={"lg"}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider className="h-[500px] overflow-y-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus ad reprehenderit omnis
          perspiciatis aut odit! Unde architecto perspiciatis, dolorum dolorem
          iure quia saepe autem accusamus eum praesentium magni corrupti
          explicabo! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus ad reprehenderit omnis perspiciatis aut odit! Unde
          architecto perspiciatis, dolorum dolorem iure quia saepe autem
          accusamus eum praesentium magni corrupti explicabo! Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Accusamus ad reprehenderit
          omnis perspiciatis aut odit! Unde architecto perspiciatis, dolorum
          dolorem iure quia saepe autem accusamus eum praesentium magni corrupti
          explicabo! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus ad reprehenderit omnis perspiciatis aut odit! Unde
          architecto perspiciatis, dolorum dolorem iure quia saepe autem
          accusamus eum praesentium magni corrupti explicabo!
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpenModal(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => setOpenModal(false)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

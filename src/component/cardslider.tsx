import Carousel from "react-elastic-carousel";
import Projectcard from "@/component/projectcard";
import { projectData } from "@/data/project.data";
import Card from "@/component/card";

export default function cardslider() {
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  //   { width: 850, itemsToShow: 2, itemsToScroll: 2,},
  //   { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  //   { width: 1450, itemsToShow: 5 },
  //   { width: 1750, itemsToShow: 6 },
  // ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 850, itemsToShow: 2, itemsToScroll: 2 },
  ];
  return (
    <Carousel breakPoints={breakPoints} itemPadding={[0, 5]}>
      {projectData.map((data) => {
        return <Card projectData={data} />;
      })}
    </Carousel>
  );
}

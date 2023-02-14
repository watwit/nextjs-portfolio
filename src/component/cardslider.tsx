import Carousel from "react-elastic-carousel";
import { projectData } from "@/data/project.data";
import Card from "@/component/card";

export default function cardslider() {
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  //   { width: 850, itemsToShow: 2, itemsToScroll: 2 },
  // ];
  return (
    <div>test</div>
    // <Carousel
    //   breakPoints={breakPoints}
    //   itemPadding={[0, 5]}
    //   enableMouseSwipe={false}
    // >
    //   {projectData.map((data) => {
    //     return <Card projectData={data} key={data.id} />;
    //   })}
    // </Carousel>
    // <Carousel>
    //   {projectData.map((data) => {
    //     return <Card projectData={data} key={data.id} />;
    //   })}
    // </Carousel>
  );
}

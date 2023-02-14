export type ProjectImageType = {
  image: string;
  alt: string;
};
export type ProjectType = {
  id: number;
  image: string;
  alt: string;
  imagelist: ProjectImageType[];
  type: string;
  header: string;
  details: string[];
  tools: string[];
};

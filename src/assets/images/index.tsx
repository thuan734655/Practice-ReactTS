import Hi from "./hi.png";
import part_left_auth from "./part_left_auth.png";

const images = {
  Hi,
  part_left_auth,
} satisfies Record<string, string>;

export type ImageAppProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: keyof typeof images;
};

export const ImageApp = ({ src, ...props }: ImageAppProps) => {
  return <img src={images[src]} {...props} />;
};

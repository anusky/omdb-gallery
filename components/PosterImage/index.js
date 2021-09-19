import Image from "next/image";
import { string } from "prop-types";
import { isCorrectImageSrc } from "../../utils/generics";

const PosterImage = ({ className, Poster, Title }) => {
  return (
    <div
      data-testid="poster-image-component"
      className={`relative grid ${className}`}
    >
      {!isCorrectImageSrc(Poster) && (
        <span className="grid place-items-center w-full h-full absolute z-20 text-white ">
          No Poster Available
        </span>
      )}
      <Image
        src={
          !isCorrectImageSrc(Poster)
            ? "https://picsum.photos/id/237/200/300"
            : Poster
        }
        alt={Title}
        layout="fill"
        objectFit="contain"
        quality="100"
      />
    </div>
  );
};
export default PosterImage;
PosterImage.propTypes = {
  Poster: string,
  Title: string,
  className: string,
};
PosterImage.defaultProps = {
  className: "",
};

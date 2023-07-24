import ImageModal from "../components/UI/ImageModal";
import { useState } from "react";
import classes from "./Interests.module.css";
import { imageData as images } from "../assets/DUMMY_IMAGES";

export default function InterestsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [srcImage, setSrcImage] = useState();

  function showImageHandler(event) {
    setSrcImage(event.target.getAttribute("src"));
    setIsVisible(true);
  }

  function galleryHandler() {
    setIsVisible(false);
  }

  return (
    <>
      {isVisible && (
        <ImageModal
          src={srcImage}
          alt="piece of the gallery"
          onConfirm={galleryHandler}
        />
      )}

      <h1 className="title">INTERESTS</h1>

      <p>
        In my free time, I find it delightful to write code and read. Writing
        code has been one of my passions since high school. I love the challenge
        of solving complex problems and creating something from scratch. Also
        for me reading fiction is a wonderful way to escape into different
        worlds and explore new ideas.
      </p>

      <p>
        I travel ocasionally. There's something so invigorating about being out
        in nature and exploring new trails and vistas. It's a great way to stay
        active and clear my mind. I like outdoor adventures as much as indoor
        time with my family.
      </p>

      <p>
        My latest hobby is web design and I spent a large amount of time looking
        at tutorials and designing my projects. It allows me to express my ideas
        visually and create something that can be useful and helpful for me and
        for others. I find it fulfilling and enjoyable!
      </p>

      <div className={classes.gallery}>
        {images.map((image) => (
          <img
            className={classes.img}
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={showImageHandler}
          />
        ))}
      </div>
    </>
  );
}

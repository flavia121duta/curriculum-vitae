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
      {isVisible && <ImageModal src={srcImage} alt="piece of the gallery" onConfirm={galleryHandler} />}
      
      <h1 className="title">INTERESTS</h1>

      <p>
        I enjoy most of my spare time looking after art and painting. I traveled
        a lot and like outdoors adventures as much as cooking and indoor times
        with my family. My latest hobby is woodworking, I spent a large amount
        of time looking at technics and designing furnitures.
      </p>

      <p>
        Maecenas sed mauris eu tortor congue commodo. Phasellus varius purus nec
        ex consectetur, at laoreet odio finibus. Suspendisse quis ante sem. Sed
        consequat convallis odio, ut efficitur turpis iaculis et. Ut lobortis
        ultricies leo interdum vehicula. Integer quis dui sit amet mi lacinia
        fringilla. Donec tincidunt lobortis odio at egestas.
      </p>

      <div className={classes.gallery}>
        {images.map((image) => (
          <img className={classes.img}
            key={image.id}
            src={image.url}
            alt={image.alt}
            onClick={showImageHandler}
          />
        ))}
      </div>
    </>
  );
}

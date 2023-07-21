import { useState } from "react";
import classes from "./About.module.css";
import Resume from "../assets/resume.pdf";

export default function AboutPage() {
  const [isHidden, setIsHidden] = useState(false);
  const [typeOfChevron, setShowContactInfo] = useState(
    "fa-solid fa-chevron-down"
  );

  const hidePannelHandler = () => {
    setIsHidden(!isHidden);

    if (isHidden === true) {
      setShowContactInfo("fa-solid fa-chevron-down");
    } else {
      setShowContactInfo("fa-solid fa-chevron-up");
    }
  };

  return (
    <>
      <h1 className="title">
        <span className={`${classes["first-name"]}`}>DUŢĂ</span> FLAVIA
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu
        luctus est. Nunc pharetra tristique aliquet. Ut euismod felis fermentum
        sem cursus vulputate. Nulla maximus non tellus quis dignissim. Donec at
        augue ipsum. Aliquam sed lacinia nulla. Pellentesque sed est hendrerit,
        blandit lectus ac, ullamcorper nisi. Suspendisse laoreet pellentesque
        lectus, ut rhoncus lorem ultricies vitae. Maecenas laoreet neque sapien,
        et venenatis turpis ultricies sed. Etiam ac placerat metus, ac aliquet
        risus. Sed ultrices turpis pretium velit finibus, et laoreet magna
        congue. Nullam sagittis nulla erat, vitae imperdiet risus finibus a.
        Donec et hendrerit risus, et lobortis purus. Etiam ultrices odio quis
        augue porttitor molestie.
      </p>

      <a href={Resume} download="Duta_Flavia resume">
        <button className={`${classes["btn-download"]}`}>
          <i className="fa-solid fa-download"></i>
          Download my resume
        </button>
      </a>

      <div className={classes.social}>
        <a
          href="https://www.linkedin.com/in/flavia-duta-223903245/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/flavia121duta"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      <div className={classes.contact}>
        <div className={`${classes["hide-option"]}`} onClick={hidePannelHandler}>
          <p>Contact Me</p>
          <i className={typeOfChevron}></i>
        </div>
        {isHidden && (
          <ul>
            <li>
              Address: Strada Minis, nr. 4, bl. X6, ap. 106, Sector 3 Bucuresti
              032382
            </li>
            <li>Phone: +40-(0)733519182</li>
            <li>
              Email-s:{" "}
              <span className={classes.email}>flaviaduta302@gmail.com</span>,{" "}
              <span className={classes.email}>flavia.duta@s.unibuc.ro</span>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

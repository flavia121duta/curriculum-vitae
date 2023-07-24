import { useState } from "react";
import classes from "./About.module.css";
import Resume from "../assets/resume.pdf";
import Button from "../components/UI/Button";

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
        Hi! My name is Flavia. I am a React lover. I've done some web apps using
        the React framework, most of which were side projects and things that my
        friends and I needed. I'm very passionate about web development,
        especially front-end. One of my biggest dreams is to become a full-stack
        developer one day.
      </p>

      <p>
        I have just graduated from the Faculty of Mathematics and Computer
        Science, University of Bucharest in the Mathematics department.
        Currently, I'm doing a master's degree in Software Engineering.{" "}
      </p>

      <p>
        In my everyday life I am a very ambitious and hard-working person. Due
        to my flexible thinking I can deal with many unexpected situations. I
        enjoy working in a team. I'm cooperative and assertive with those around
        me. I am organized and efficient at work.
      </p>

      <ul>
        <li>Forename: Flavia</li>
        <li>Surname: Duţă</li>
        <li>Date of birth: 1 February 2002</li>
        <li>Place of birth: Oneşti, Romania</li>
        <li>Nationality: Romanian</li>
      </ul>

      <a href={Resume} download="Duta_Flavia resume">
        <Button text="  Download my resume" i="fa-solid fa-download"></Button>
      </a>

      <div className={classes.social}>
        <a
          href="https://www.linkedin.com/in/flavia-duta-223903245/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
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
        <div
          className={`${classes["hide-option"]}`}
          onClick={hidePannelHandler}
        >
          <h3>Contact Me</h3>
          <i className={typeOfChevron}></i>
        </div>
        {isHidden && (
          <ul className={`${classes["contacts-list"]}`}>
            <li>Phone: +40-(0)733519182</li>
            <li>
              Email-s:{" "}
              <span className={classes.email}>flaviaduta302@gmail.com</span>,{" "}
              <span className={classes.email}>flavia.duta@s.unibuc.ro</span>
            </li>
            <li>
              Permanent Address: Strada Minis, nr. 4, bl. X6, ap. 106, Sector 3,
              Bucuresti 032382
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

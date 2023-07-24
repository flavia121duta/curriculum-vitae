import classes from "./ExperienceSection.module.css";
import Button from "./Button";
import Card from "./Card";
import { useState } from "react";

export default function ExperienceSection(props) {
  const [cardIsVisible, setCardIsVisible] = useState(false);

  const showSectionHandler = () => {
    console.log("clicked");
    setCardIsVisible((prev) => !prev);
    console.log(cardIsVisible);
  };

  return (
    <section>
      <h2>{props.title}</h2>
      <Button
        text={`${cardIsVisible ? "Hide" : "Show "} project details`}
        onClick={showSectionHandler}
      />
      {cardIsVisible && (
        <div className={classes.cards}>
          <Card title="Purpose" content={props.purpose} />
          <Card title="My contribution" content={props.contribution} />
          <Card title="Technologies used" content={props.technologies} link={props.link} />
        </div>
      )}
    </section>
  );
}

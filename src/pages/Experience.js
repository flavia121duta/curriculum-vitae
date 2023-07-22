import group_picture from "../assets/images/group_picture.jpeg";
import classes from "./Experience.module.css";

export default function ExperiencePage() {
  return <>
  <h1 className="title">EXPERIENCE</h1>

  <img src={group_picture} alt="group" className={`${classes["group-image"]}`} />
  </>
}

import classes from "./Experience.module.css";
import ExperienceSection from "../components/UI/ExperienceSection";
import { useEffect, useState } from "react";

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://personal-site-d7a7d-default-rtdb.firebaseio.com/experience.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedData = [];
      for (const key in responseData) {
        loadedData.push({
          id: key,
          purpose: responseData[key].purpose,
          link: responseData[key].link,
          contribution: responseData[key].myContribution,
          technologies: responseData[key].technologiesUsed,
          title: responseData[key].title,
        });
      }

      setExperiences(loadedData);
      setIsLoading(false);
    };

    fetchData()
      .then()
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, []);

  if (isLoading) {
    return (
      <section style={{ textAlign: "center" }}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section style={{ textAlign: "center", color: "red" }}>
        <h4>{httpError}</h4>
      </section>
    );
  }

  return (
    <div className={`${classes["long-content"]}`}>
      <h1 className="title">EXPERIENCE</h1>
      {experiences.map((experience) => (
        <ExperienceSection
          key={experience.id}
          title={experience.title}
          purpose={experience.purpose}
          technologies={experience.technologies}
          contribution={experience.contribution}
          link= {experience.link}
        />
      ))}
    </div>
  );
}

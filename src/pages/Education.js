import classes from "./Education.module.css";

export default function EducationPage() {
  return (
    <>
      <h1 className="title">EDUCATION</h1>

      <section>
        <h2>DEGREES</h2>
        <div className={classes.container}>
          <div>2016 - 2020:</div>
          <div>
            High School{" "}
            <a href="https://dcantemir.ro/" target="_blank" rel="noreferrer">
              National College "Dimitrie Cantemir"
            </a>{" "}
            from Oneşti
          </div>
          <div>2020 - 2023:</div>
          <div>
            Diploma in Mathematics at the University of Bucharest,{" "}
            <a href="https://fmi.unibuc.ro/" target="_blank" rel="noreferrer">
              Faculty of Mathematics and Computer Science
            </a>{" "}
          </div>
          <div>2023 - Present:</div>
          <div>Master in Software Engineering at the University of Bucharest,{" "}
            <a href="https://fmi.unibuc.ro/" target="_blank" rel="noreferrer">
              Faculty of Mathematics and Computer Science
            </a>{" "}</div>
        </div>
      </section>

      <section>
        <h2>CERTIFICATIONS</h2>
        <ul>
          <li>ECDL</li>
          <li>Oracle Certification</li>
          <li>
            Certification in Informatics for a project about a Datebase of an
            Airport
          </li>
          <li>
            Certification in English for a project about Applied Mathematics
          </li>
        </ul>
      </section>

      <section>
        <h2>TRAININGS</h2>
        <div className={classes.container}>
          <div>July 2022 - Aug 2022:</div>
          <div>Internship at Deloitte Digital, Bucharest</div>
          <div>Nov 2022 - May 2022:</div>
          <div>
            Pedagogical Practice at the Secondary School "Titu Maiorescu",
            Bucharest
          </div>
        </div>
      </section>
    </>
  );
}

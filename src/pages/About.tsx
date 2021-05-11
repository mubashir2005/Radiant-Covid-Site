import React from "react";

function About() {
  return (
    <div className={"about"}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <h1 className={"about__header animate__animated animate__flash "}>
        About this site
      </h1>
      <p className={"about__subtitle animate__animated animate__tada"}>
        Covid 19 Information site of
        <strong>
          <a href="https://shortnner.tech/G4jq9xP5W">
            {" "}
            Radiant International School
          </a>
        </strong>
      </p>
      <p className="about__body animate__animated animate__wobble">
        This site was created to help people during the Covid 19 Pandemic. With
        the help of this site people can find medical resources in Patna. Covid
        19 has overwhelmed the Indian Medical Infrastructure.
        <span className="about__body about__purpose">
          We hope this website can save lives in Patna during the Covid 19
          Pandemic.
        </span>
      </p>
      <br />
    </div>
  );
}

export default About;

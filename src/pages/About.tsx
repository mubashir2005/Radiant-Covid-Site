import React from "react";
import {Nav} from "react-bootstrap";

function About() {
  return (
    <div className={"about"}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <h1 className={"about__header animate__animated animate__tada"}>
        About this site
      </h1>
      <p className={"about__subtitle "}>
        Covid 19 Information site of
        <strong>
          <a href="https://shortnner.tech/G4jq9xP5W">
            {" "}
            Radiant International School
          </a>
        </strong>
      </p>
      <p className="about__body">
        This site was created to help people during the Covid 19 Pandemic. With
        the help of this site people can find medical resources in Patna. Covid
        19 has overwhelmed the Indian Medical Infrastructure.
        <span className="about__body about__purpose">
          We hope this website can save lives in Patna during the Covid 19
          Pandemic.
        </span>
      </p>
      <br />
        <Nav.Link href={"/Creators"} className={"about__body__creators"}>Want to know who made this site?</Nav.Link>
        <br/>
        <Nav.Link href={"https://forms.gle/SUxQBWj76KYKhGYw7"} className={"about__body__feedback"}>Give us feedback</Nav.Link>


    </div>
  );
}

export default About;

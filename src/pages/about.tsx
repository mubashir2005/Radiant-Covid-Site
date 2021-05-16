import React from "react";
import Link from "next/link";

function About() {
  return (
    <div className={"about"}>
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
      <Link href={"/creators"}>Want to know who made this site?</Link>
      <br />
        <br/>
      <a
        href={"https://forms.gle/SUxQBWj76KYKhGYw7"}
        className={"about__body__feedback"}
      >
        Give us feedback
      </a>
        <br/>
        <br/>
        <br/>
        <br/>
        <p><a href="https://www.radiantcovid.in/">Back to Home page</a></p>
    </div>
  );
}

export default About;

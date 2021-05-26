import React, { useEffect } from "react";
import { firebaseApp } from "../firebase";
import Link from "next/link";

function About() {
  useEffect(() => {
    firebaseApp.analytics().logEvent("came to about page");
  }, []);

  return (
    <div className={"about"}>
      <h1 className={"about__header animate__animated animate__tada"}>
        About this site
      </h1>
      <p className={"about__subtitle "}>
        Covid 19 Information site of
        <strong>
          <a
            href="https://shortnner.tech/G4jq9xP5W"
            target={"_blank"}
            onClick={() =>
              firebaseApp.analytics().logEvent("went to radiant's website")
            }
          >
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
      <br />
      <p>
        <Link href="/">
          <strong
            onClick={() =>
              firebaseApp
                .analytics()
                .logEvent("went back to home page from about page.")
            }
          >
            Back to Home page
          </strong>
        </Link>
      </p>
    </div>
  );
}

export default About;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Creators = () => {
  return (
    <div className="Creators">
      <h1 className="Creators__header">Creators</h1>
      <p className="Creators__tech__lead">
        <strong>Mohammed Mubashir Hasan</strong>
      </p>
      <Image
        src="/images/boss.jpeg"
        height={350}
        objectFit={"contain"}
        width={300}
        objectPosition={"left"}
        alt="Mubashir"
        className={"Creators__image"}
      />
      <p className={"Creators__something"}>
        I am a tech geek who likes doing everything tech.
      </p>
      <p className="Creators__other__tech__guy">
        <strong>Madhav Anand</strong>
      </p>
      <Image
        className={"Creators__image"}
        src="/images/madhav.jpg"
        alt="Madhav"
        objectFit={"contain"}
        objectPosition={"left"}
        height={350}
        width={300}
      />
      <p className={"Creators__something"}>I like minecraft.</p>
      <p className={"Creators__dev"}>
        Want to contribute? Here's the link to the{" "}
        <a href="https://shortnner.tech/Sic9ag-Nn">
          <strong>repo</strong>
        </a>
        <br />
        <br />
        <p>
          <Link href="/">
            <strong>Back to Home page</strong>
          </Link>
        </p>
      </p>
    </div>
  );
};

export default Creators;

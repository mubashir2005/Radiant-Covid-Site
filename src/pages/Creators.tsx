import React from "react";
import Image from 'react-bootstrap/Image'


const Creators = () => {
  // @ts-ignore
    // @ts-ignore
    return (
    <div className="Creators">
      <h1 className="Creators__header">Creators</h1>
      <p className="Creators__tech__lead">
        <strong>Mohammed Mubashir Hasan</strong>
      </p>
      <Image src="https://raw.githubusercontent.com/dingus45191/Radiant-Covid-Site/master/public/images/mubashir.jpeg" height={200} width={300} alt="Mubashir" className={"Creators__image"}  />
      <p className={"Creators__something"}>I am a tech geek who likes doing everything tech.</p>
      <p className="Creators__other__tech__guy">
        <strong>Madhav Anand</strong>
      </p>
      <Image className={"Creators__image"} src="/madhav.png" alt="Madhav"   height={200} width={300}  />
      <p className={"Creators__something"}>I have fun with tech.</p>
      <p className={"Creators__dev"}>
        Want to contribute? Here's the link to the{" "}
        <a href="https://shortnner.tech/Sic9ag-Nn">
          <strong>repo</strong>
        </a>
      </p>
    </div>
  );
};

export default Creators;
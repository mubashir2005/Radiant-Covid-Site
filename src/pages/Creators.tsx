import React from "react";
import Image from "next/image";

const Creators = () => {
  return (
    <div className="Creators">
      <h1 className="Creators__header">Creators</h1>
      <p className="Creators__tech__lead">
        <strong>Mohammed Mubashir Hasan</strong>
      </p>
      <Image src="/mubashir.png" alt="Mubashir" width={100} height={100} />
      <p className="Creators__other__tech__guy">
        <strong>Madhav Anand</strong>
      </p>
      <Image src="/madhav.png" alt="Madhav" width={100} height={100} />
      <p>
        Want to contribute? Here's the link to the{" "}
        <a href="https://shortnner.tech/Sic9ag-Nn">
          <strong>repo</strong>
        </a>
      </p>
    </div>
  );
};

export default Creators;

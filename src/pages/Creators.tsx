import React from "react";
import Image from "next/image";
import {ImageRounded} from "@material-ui/icons";
import {Avatar} from "@material-ui/core";

const Creators = () => {
  // @ts-ignore
    // @ts-ignore
    return (
    <div className="Creators">
      <h1 className="Creators__header">Creators</h1>
      <p className="Creators__tech__lead">
        <strong>Mohammed Mubashir Hasan</strong>
      </p>
      <Avatar src="blob:https://web.whatsapp.com/56d0817a-3e82-41b1-b5d5-cab5854e8d74" alt="Mubashir"  />
      <p className="Creators__other__tech__guy">
        <strong>Madhav Anand</strong>
      </p>
      <Avatar src="/madhav.png" alt="Madhav"  />
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

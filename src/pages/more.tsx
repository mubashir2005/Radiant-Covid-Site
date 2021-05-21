import React from "react";
import Link from "next/link"

function more() {
  return (
    <div className={"more"}>
      <h1 className={"more__header"}> All Covid Resources in one place</h1>
      <div className={"more__links"}>
        <a href={"https://shortnner.tech/gmXKr2ABm"} className={"more__link"}>
          <strong>Vaccine Registration</strong>
        </a>
        <br />
        <br />
        <a href="https://shortnner.tech/2fcQ23i01" className={"more__link"}>
          <strong>MOHFW</strong>
        </a>
        <br />
        <br />
        <a href="https://shortnner.tech/Tw4D8BI7a" className={"more__link"}>
          <strong>AIIMS Patna</strong>
        </a>
        <br />
        <br />
        <a href="https://qrgo.page.link/wtmHD" className={"more__link"}>
          <strong>E-PASS Bihar</strong>
        </a>
        <br />
        <br />
        <a href="https://pmch.in/" className={"more__link"}>
          <strong>PMCH</strong>
        </a>
        <br />
        <br />
        <a href="http://igims.org/" className={"more__link"}>
          <strong>IGIMS</strong>
        </a>
        <br/>
        <br/>
        <br/>
        <br/>

        <Link href={"/"}><em>Back to home</em></Link>
      </div>
    </div>
  );
}

export default more;

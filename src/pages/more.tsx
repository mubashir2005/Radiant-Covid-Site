import React from "react";

function more() {

  let styles={
    cursor:"pointer",
    textDecoration:"underline"
  }
  return (
    <div className={"more"}>
      <h1 className={"more__header"}> All Covid Resources in one place</h1>
      <div className={"more__links"}>

        <a href={"https://shortnner.tech/QnsDuT_Y6"} target={'_blank'} className={"more__link"}>
          <strong>Vaccine Registration</strong>
        </a>
        <br />
        <br />
        <a href={"https://shortnner.tech/gmXKr2ABm"} target={'_blank'} className={"more__link"}>
          <strong>Book Vaccine Slots</strong>
        </a>

        <br />
        <br />
        <a href="https://shortnner.tech/2fcQ23i01" className={"more__link"} target={'_blank'}>
          <strong>MOHFW</strong>
        </a>
        <br />
        <br />
        <a href="https://shortnner.tech/Tw4D8BI7a" className={"more__link"} target={'_blank'} >
          <strong>AIIMS Patna</strong>
        </a>
        <br />
        <br />
        <a href="https://qrgo.page.link/wtmHD" className={"more__link"} target={'_blank'}>
          <strong>E-PASS Bihar</strong>
        </a>
        <br />
        <br />
        <a href="https://pmch.in/" className={"more__link"} target={'_blank'}>
          <strong>PMCH</strong>
        </a>
        <br />
        <br />
        <a href="http://igims.org/" className={"more__link"} target={'_blank'}>
          <strong>IGIMS</strong>
        </a>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href={"/"} style={styles} ><em>Back to home</em></a>
      </div>
    </div>
  );
}

export default more;

import React, { useEffect } from "react";
import { firebaseApp } from "../firebase";
import Link from "next/link";

interface HelperLinkSchema {
  text: string;
  url: string;
}

function more() {
  const styles = {
    cursor: "pointer",
    textDecoration: "underline",
  };

  useEffect(() => {
    firebaseApp.analytics().logEvent("came to more page");
  }, []);

  const HelperLink = ({ text, url }: HelperLinkSchema) => (
    <>
      <a
        href={url}
        onClick={() =>
          firebaseApp.analytics().logEvent(`navigated to {text}`, {
            text,
            url,
          })
        }
        target="_blank"
        rel="noreferrer"
        className="more__link"
      >
        <strong>{text}</strong>
      </a>
      <br />
      <br />
    </>
  );

  return (
    <div className={"more"}>
      <h1 className={"more__header"}> All Covid Resources in one place</h1>
      <div className={"more__links"}>
        <HelperLink
          text="Vaccine Registration"
          url={"https://selfregistration.cowin.gov.in/"}
        />
        <HelperLink
          text="Book Vaccine Slots"
          url={"https://www.cowin.gov.in/home"}
        />
        <HelperLink text="MOHFW" url={"https://www.mohfw.gov.in/"} />
        <HelperLink text="AIIMS Patna" url={"https://www.aiimspatna.org/"} />
        <HelperLink text="E-PASS Bihar" url={"https://qrgo.page.link/wtmHD"} />

        <HelperLink text="PMCH" url={"https://pmch.in"} />
        <HelperLink text="IGIMA" url={"http://igims.org/"} />
        <HelperLink
          text="BIHAR ICU BEDS TRACKING"
          url={"https://covid19health.bihar.gov.in/DailyDashboard/BedsOccupied"}
        />
        <br />
        <br />
        <Link href={"/"}>
          <a
            style={styles}
            onClick={() =>
              firebaseApp
                .analytics()
                .logEvent("went back to home from more page")
            }
          >
            <em>Back to home</em>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default more;

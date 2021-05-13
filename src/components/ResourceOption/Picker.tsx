import React from 'react'
import styled from "styled-components";
import { useRecoilState } from "recoil";
import queryState from "../../atoms/query";
import { COVID_19_INDIA } from "../../constants";
import Image from "next/image";
import {VisualPicker} from "react-rainbow-components";
import { VisualPickerOption } from "react-rainbow-components";

function Picker() {
    const [query, setQuery] = useRecoilState(queryState);

    const DarkVisualPicker = styled(VisualPickerOption)`
  margin: 0 10px;

  span[data-id="visual-picker_option"] {
    background: transparent !important;
  }

  span,
  svg {
    z-index: 100 !important;
  }

  .display-image {
    border-radius: 22px;
  }
`;

    const handleOxygen = () => {
        setQuery(
            `${COVID_19_INDIA} #Oxygen #Patna #OxygenCylinder #Verified`
        );
    };
    const handleVentilator = () => {
        setQuery(
            `${COVID_19_INDIA} #Patna #Ventilator #BedsAvailable `
        );
    };
    const handleAmbulance = () => {
        setQuery(
            `${COVID_19_INDIA}#Patna #ambulance `
        );
    };
    const handlePlasma = () => {
        setQuery(
            `${COVID_19_INDIA} #plasma #Patna #covidblood   `
        );
    };
    const handleRemedesivir = () => {
        setQuery(
            `${COVID_19_INDIA} #Remedesivir #Patna`
        );
    };
    const handleICU = () => {
        setQuery(
            `${COVID_19_INDIA}#Patna #ICUbeds #BedsAvailable`
        );
    };
    const handleFabiflu = () => {
        setQuery(
            `${COVID_19_INDIA} #fabiflu #Patna `
        );
    };
    const handleOximeter = () => {
        setQuery(
            `${COVID_19_INDIA} #Patna  #Oximeter  `
        );
    };
    // @ts-ignore
    return (
        <div>
<VisualPicker id="visual-picker-component-1" multiple>
    <DarkVisualPicker onClick={handleOxygen}><Image src={"/images/oxygen.jpg"} layout={"fill"} className={"display-image"}/></DarkVisualPicker>
    <DarkVisualPicker onClick={handleVentilator}><Image src={"/images/ventilator.jpg"} layout={"fill"} className={"display-image"}/></DarkVisualPicker>
    <DarkVisualPicker onClick={handleRemedesivir}><Image src={"/images/remedesivir.jpg"} layout={"fill"} className={"display-image"}/></DarkVisualPicker>
    <DarkVisualPicker onClick={handleICU}><Image src={"/images/ICU.webp"} layout={"fill"} className={"display-image"}/></DarkVisualPicker>
    <DarkVisualPicker onClick={handlePlasma}><Image src={"/images/plasma.jpg"} layout={"fill"} className={"display-image"}/></DarkVisualPicker>
    <DarkVisualPicker onClick={handleAmbulance}><Image src={"/images/ambulance.jpg"} layout={"fill"} className={"display-image"}/></DarkVisualPicker>
    <DarkVisualPicker onClick={handleFabiflu}><Image src={"/images/fabiflu.jpeg"} layout={"fill"} className={"display-image"}/></DarkVisualPicker>
    <DarkVisualPicker onClick={handleOximeter}><Image src={"/images/oximeter.jpg"} layout={"fill"} className={"display-image"}/></DarkVisualPicker>
</VisualPicker>
        </div>
    )
}

export default Picker;

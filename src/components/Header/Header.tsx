import React, { useEffect } from "react";
import {IconButton, Input, MenuItem} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import queryState from "../../atoms/query";
import useSearchTweets from "../../hooks/useSearchTweets";
import { COVID_19_INDIA } from "../../constants";
import Select from '@material-ui/core/Select';

const CloseButton = styled(IconButton)`
  padding: 3px !important;
  color: gray;
  outline: none;

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: 728px) {
    padding: 6px !important;
  }
`;

function Header() {
  const [query, setQuery] = useRecoilState(queryState);

  const { searchTweets } = useSearchTweets(query);

  useEffect(() => {
    searchTweets();
  }, [query]);

  const handleQueryChange = (query: string) => {
    setQuery(`${COVID_19_INDIA}${query}`);
  };
  const handleOxygen = () => {
    setQuery(
        `${COVID_19_INDIA} #Oxygen #Patna #OxygenCylinder #Verified`
    );
  };
  const handleOxygenConcentrator = () => {
    setQuery(
        `${COVID_19_INDIA} #Oxygen #Patna #OxygenConcentrator  `
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
        `${COVID_19_INDIA} #plasma #Patna  `
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
  return (
    <header
      className={
        "border border-gray-200 py-4 px-1 md:px-8 flex flex-row items-center dark:bg-black dark:bg-opacity-30 bg-opacity-40 text-white dark:border-0"
      }
    >
      <p
        className={
          "text-2xl md:text-3xl lg:text-4xl text-gray font-bold justify-self-start dark:text-white "
        }
      >
        Tweeties
      </p>

      <div
        className={
          "m-auto w-3/5 md:w-4/6 flex justify-between items-center border-2 border-gray-300 rounded-xl py-1 px-3 dark:text-white dark:bg-gray-700"
        }
      >
        <p className={"flex items-center mr-2 dark:bg-gray-900"}>
          {COVID_19_INDIA}
        </p>
        <Input
          className={"flex-grow -mb-0.5 dark:bg-gray-700"}
          disableUnderline
          value={query.split(COVID_19_INDIA)[1]}
          onChange={(event) => handleQueryChange(event.target.value)}
        />
        <CloseButton
          className={"close"}
          onClick={() => setQuery(COVID_19_INDIA)}
        >
          <ClearIcon style={{ color: "black !important" }} />
        </CloseButton>
        <Select >
          <MenuItem value={10} onClick={handleOxygen}>Oxygen Cylinder</MenuItem>
          <MenuItem value={20} onClick={handleOxygenConcentrator}>Oxygen Concentrator</MenuItem>
          <MenuItem value={30} onClick={handleVentilator}>Ventilator</MenuItem>
          <MenuItem value={40} onClick={handleOximeter}>Oximeter</MenuItem>
          <MenuItem value={50} onClick={handleRemedesivir}>Remedesivir</MenuItem>
          <MenuItem value={50} onClick={handlePlasma}>Plasma</MenuItem>
          <MenuItem value={60} onClick={handleFabiflu}>Fabiflu</MenuItem>
          <MenuItem value={70} onClick={handleAmbulance}>Ambulance</MenuItem>
          <MenuItem value={80} onClick={handleICU}>ICU Beds</MenuItem>
        </Select>
      </div>
    </header>
  );
}

export default Header;

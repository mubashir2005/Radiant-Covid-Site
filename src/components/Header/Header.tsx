import React from "react";
import { IconButton, Input } from "@material-ui/core";
import styled from "styled-components";
import queryState from "../../atoms/query";
import { COVID_19_INDIA } from "../../constants";
import { Search, Clear as ClearIcon } from "@material-ui/icons";
import filtersState from "../../atoms/filters";
import { useRecoilState } from "recoil";
import Link from "next/link";

const CloseButton = styled(IconButton)`
  padding: 3px !important;
  outline: none;

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: 728px) {
    padding: 6px !important;
  }
`;

const SearchInput = styled(Input)`
  color: #d9d9d9 !important;
  caret-color: #d9d9d9;
`;

function Header() {
  const [_query, setQuery] = useRecoilState(queryState);
  const [_filters, setFilters] = useRecoilState(filtersState);

  const handleQueryChange = (query: string) => {
    setQuery(`${query}`);
  };

  return (
    <header
      className={
        "py-4 px-1 md:px-8 flex flex-row items-center border border-1 border-gray"
      }
    >
      <p
        className={
          "pl-1 text-xl md:text-3xl lg:text-4xl font-bold justify-self-start color-gray"
        }
      >
        RIS Covid
      </p>

      <div
        className={
          "m-auto w-3/5 md:w-4/6 flex justify-between items-center rounded-xl py-1 px-3 background-gray"
        }
      >
        <Search className={"color-gray"} style={{ margin: "0 5px" }} />
        <SearchInput
          className={"flex-grow -mb-0.5 pr-8"}
          disableUnderline
          placeholder={"Search"}
          onChange={(event) => handleQueryChange(event.target.value)}
        />

        <CloseButton
          className={"close"}
          name={"clear"}
          onClick={() => {
            setQuery(COVID_19_INDIA);
            setFilters([]);
          }}
        >
          <ClearIcon className={"color-gray"} />
        </CloseButton>
      </div>
      <Link href="/about">
        <a className={"color-gray"} style={{ margin: "0 5px" }}>
          About
        </a>
      </Link>
    </header>
  );
}

export default Header;

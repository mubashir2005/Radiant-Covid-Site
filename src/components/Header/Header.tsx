import React from "react";
import { IconButton, Input } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import styled from "styled-components";
import queryState from "../../atoms/query";
import { COVID_19_INDIA } from "../../constants";
import { Search } from "@material-ui/icons";
import filtersState from "../../atoms/filters";
import { useRecoilState } from "recoil";
import { Nav } from "react-bootstrap";

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

const ResponsiveParagraph = styled.p`
  @media only screen and (max-width: 620px) {
    display: none;
  }
`;

function Header() {
  //@ts-ignore
  const [query, setQuery] = useRecoilState(queryState);
  //@ts-ignore
  const [filters, setFilters] = useRecoilState(filtersState);

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
          "text-2xl md:text-3xl lg:text-4xl font-bold justify-self-start color-gray"
        }
      >
        Radiant Covid
      </p>

      <div
        className={
          "m-auto w-3/5 md:w-4/6 flex justify-between items-center rounded-xl py-1 px-3 background-gray"
        }
      >
        <Search className={"color-gray"} />
        <ResponsiveParagraph
          className={
            "flex items-center mx-2 color-gray whitespace-wrap lg:whitespace-nowrap"
          }
        >
          {/* {COVID_19_INDIA}{" "} */}
          {/* {filters
            .map((filter) => {
              for (let resource of medicalResources)
                if (resource.name === filter) return resource.displayName;
            })
            .join(" ")} */}
        </ResponsiveParagraph>
        <SearchInput
          id={"search "}
          className={"flex-grow -mb-0.5"}
          disableUnderline
          placeholder={"Search"}
          onChange={(event) => handleQueryChange(event.target.value)}
        />
        {
          <CloseButton
            className={"close"}
            onClick={() => {
              setQuery(COVID_19_INDIA);
              //@ts-ignore
              setFilters([])
            }}
          >
            <ClearIcon className={"color-gray"} />
          </CloseButton>
        }
      </div>
      <Nav.Link href="/About" className={"text-white mr-auto"}>About</Nav.Link>

    </header>
  );
}

export default Header;

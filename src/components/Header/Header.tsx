import React from "react";
import { IconButton, Input } from "@material-ui/core";
import styled from "styled-components";
import queryState from "../../atoms/query";
import { COVID_19_INDIA } from "../../constants";
import { Search, Clear as ClearIcon } from "@material-ui/icons";
import filtersState from "../../atoms/filters";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { push as Menu } from "react-burger-menu";

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

  @media only screen and (max-width: 640px) {
    width: 50px;
  }
`;

function Header() {
  const [_query, setQuery] = useRecoilState(queryState);
  const [_filters, setFilters] = useRecoilState(filtersState);

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "30px",
      height: "20px",
      right: "0px",
      top: "25px",
      outlineWidth: "0px"
    },
    bmBurgerBars: {
      background: "#d9d9d9",
      outlineWidth: "0px"
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
      outlineWidth: "0px"
    },
    bmCross: {
      background: "#d9d9d9",
    },
    bmMenu: {
      background: "#000",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },

  };

  const handleQueryChange = (query: string) => {
    setQuery(`${query}`);
  };

  // @ts-ignore
  return (
    <header
      className={
        "py-4 px-1 md:px-8 flex flex-row items-center border border-1 border-gray"
      }
      id="outer-container"
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
          "sm:mr-auto sm:ml-1 m-auto w-3/5 md:w-4/6 flex justify-between items-center rounded-xl py-1 px-3 background-gray"
        }
      >
        <Search className={"color-gray"} style={{ margin: "0 8px 0 0" }} />
        <SearchInput
          className={"flex-grow -mb-0.5 pr-8 flex"}
          disableUnderline
          placeholder={"Search"}
          onChange={(event) => handleQueryChange(event.target.value)}
        />

        <CloseButton
          className={"close"}
          aria-label={"clear"}
          onClick={() => {
            setQuery(COVID_19_INDIA);
            setFilters([]);
          }}
        >
          <ClearIcon className={"color-gray"} />
        </CloseButton>
      </div>

      <Menu
        right
        styles={styles}
        isOpen={false}
        disableCloseOnEsc
        outerContainerId="outer-container"
        pageWrapId="page-wrap"
      >
        <Link href="/more">
          <a className={"color-gray"}>
            More
          </a>
        </Link>
        <br />
        <Link href="/about">
          <a className={"color-gray"}>
            About
          </a>
        </Link>
        <br />
        <Link href="/creators">
          <a className={"color-gray"}>
            Developers
          </a>
        </Link>
        <br />
        <a
        className={"color-gray"}
          href="https://forms.gle/SUxQBWj76KYKhGYw7"
        target={'_blank'}
        >
          Feedback
        </a>
      </Menu>
    </header>
  );
}

export default Header;

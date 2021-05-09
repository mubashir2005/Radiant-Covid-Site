import { atom } from "recoil";
import { COVID_19_INDIA } from "../constants";

const queryState = atom({
  key: "query",
  default: COVID_19_INDIA,
});

export default queryState;

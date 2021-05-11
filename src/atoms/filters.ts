import { atom } from "recoil";

const filtersState = atom<string[]>({
  key: "medical filters",
  default: [],
});

export default filtersState;

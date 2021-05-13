import {atom} from "recoil";
import {GetTweet} from "../server/typeDefs/typescript-types";

const originalTweetsState = atom<GetTweet[]>({
    key: "original query state",
    default: []
})

export default originalTweetsState
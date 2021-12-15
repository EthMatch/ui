import { createState } from "@hookstate/core";
import Web3 from "web3";

const accountState = createState(null);
const providerState = createState(null);
const balanceState = createState(0);
const proposalsState = createState([]);
const playerSessionState = createState([]);
let web3State = new Web3("http://localhost:8546");
const setWeb3Client = (address) => {
  web3State = new Web3(address);
};
export {
  accountState,
  providerState,
  web3State,
  setWeb3Client,
  balanceState,
  proposalsState,
  playerSessionState,
};

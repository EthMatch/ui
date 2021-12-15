import Web3 from "web3";

const CHAIN_ID = 80001;
const ENTRY_FEE = Web3.utils.toBN(150000000000000000).toString();
const OPERATORS_SHARE = Web3.utils.toBN(100000000000000000).toString();
const BASE_URL = "http://ip:3333";
const GAME_URL = (player, lobbyId, signature) => {
  return `http://operator/ethgame/${player}/${lobbyId}/${signature}`;
};
const APP_NAME = "Chess";
const CONTRACT_ADDRESS = "address";
export {
  CHAIN_ID,
  ENTRY_FEE,
  BASE_URL,
  CONTRACT_ADDRESS,
  OPERATORS_SHARE,
  APP_NAME,
  GAME_URL,
};

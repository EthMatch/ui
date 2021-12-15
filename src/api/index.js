import axios from "axios";
import { BASE_URL, ENTRY_FEE, OPERATORS_SHARE } from "../config/config";
import { accountState, playerSessionState, proposalsState } from "../states";

import {
  GetPlayerBalance,
  InitContract,
  CreateAccount,
  AddBalance,
} from "./eth";
const ethProxy = new axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});
const EnterMatchMaking = () => {
  return new Promise((resolve) => {
    ethProxy
      .post(`/ticket/${accountState.get()}`, {
        entry_fee: Number(ENTRY_FEE),
        operators_share: Number(OPERATORS_SHARE),
      })
      .then((data) => {
        resolve({
          status: data.data.statusCode,
          data:
            data.data.statusCode === 200 ? data.data.data : data.data.message,
        });
      })
      .catch((err) => {
        console.log(err.data);
        resolve({
          status: 500,
          data: err.data ? err.data : "something went wrong!",
        });
      });
  });
};
const SignLobby = ({ id = null, signature = null }) => {
  return new Promise((resolve) => {
    if (id && signature && accountState.get()) {
      ethProxy
        .post(`/lobby/${accountState.get()}/sign`, {
          signature: signature,
          lobby_id: id,
        })
        .then((data) => {
          resolve({
            status: data.data.statusCode,
            data: data.data.message,
          });
        })
        .catch((err) => {
          resolve({
            status: 500,
            data: err.data ? err.data : "something went wrong!",
          });
        });
    } else {
      resolve({
        status: 500,
        data: "invalid payload!",
      });
    }
  });
};
const GetPlayerSessions = () => {
  return new Promise((resolve) => {
    ethProxy
      .get(`/lobby/${accountState.get()}/sessions`)
      .then((data) => {
        console.log(data.data.data.sessions);
        if (data.data.statusCode === 200 && data.data.data.sessions) {
          playerSessionState.set(data.data.data.sessions);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const GetProposals = () => {
  setInterval(() => {
    if (accountState.get()) {
      ethProxy
        .get(`/lobby/${accountState.get()}/proposals`)
        .then((data) => {
          console.log(data.data.data);
          if (data.data.statusCode === 200 && data.data.data) {
            let dataToSet = data.data.data.map((v) => {
              v["p1"] = Object.keys(v.players)[0];
             v["p2"] = v.players[Object.keys(v.players)[1]];
              //  v.operators_share = Web3.utils.fromWei(`${v.operators_share}`);
              //  v.pool = Web3.utils.fromWei(`${v.pool}`);
              return v;
            });
            proposalsState.set(dataToSet);
          } else {
            proposalsState.set([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, 10000);
};
export {
  GetPlayerBalance,
  InitContract,
  CreateAccount,
  AddBalance,
  EnterMatchMaking,
  GetProposals,
  SignLobby,
  GetPlayerSessions,
};

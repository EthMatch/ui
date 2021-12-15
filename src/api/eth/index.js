import Web3 from "web3";
import {
  APP_NAME,
  CHAIN_ID,
  CONTRACT_ADDRESS,
  ENTRY_FEE,
} from "../../config/config";
import * as contractABI from "../../contract/Game.json";
import { accountState, providerState, web3State } from "../../states";
let contract = new web3State.eth.Contract(contractABI.abi, CONTRACT_ADDRESS);
const InitContract = () => {
  contract = new web3State.eth.Contract(contractABI.abi, CONTRACT_ADDRESS);
};
const GetPlayerBalance = () => {
  return new Promise((resolve) => {
    if (accountState.get()) {
      contract.methods
        .getBalance()
        .call({
          from: accountState.get(),
        })
        .then((data) => {
          resolve({
            balance: data,
          });
        })
        .catch((err) => {
          if (err.message.includes("Player does not exist!")) {
            resolve({
              NOTFOUND: true,
              err: true,
            });
          } else {
            resolve({
              NOTFOUND: false,
              err: true,
            });
          }
        });
    }
  });
};
const CreateAccount = () => {
  return new Promise((resolve) => {
    if (accountState.get()) {
      contract.methods.createNewAccount().send({
        from: accountState.get(),
        value: Web3.utils.toBN(0).toString(),
      });
    }
  });
};
const AddBalance = () => {
  return new Promise((resolve) => {
    if (accountState.get()) {
      contract.methods.depositBalances().send({
        from: accountState.get(),
        value: Web3.utils.toBN(ENTRY_FEE).toString(),
      });
    }
  });
};
const ApproveProposal = async ({
  id,
  players,
  entry_fee,
  operators_share,
  operator_address,
}) => {
  const msgParams = JSON.stringify({
    domain: {
      chainId: CHAIN_ID,
      name: APP_NAME,
      verifyingContract: CONTRACT_ADDRESS,
      version: "1",
    },
    message: {
      id: id,
      ticket_id: players[accountState.get()],
      entry_fee: `${entry_fee}`,
      operators_share: `${operators_share}`,
      operators_address: operator_address,
    },
    primaryType: "Proposal",
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
      Proposal: [
        { name: "id", type: "string" },
        { name: "ticket_id", type: "string" },
        { name: "entry_fee", type: "uint256" },
        { name: "operators_share", type: "uint256" },
        { name: "operators_address", type: "address" },
      ],
    },
  });

  const signedData = await providerState.get().request({
    method: "eth_signTypedData_v4",
    from: accountState.get(),
    params: [accountState.get(), msgParams],
  });
  return signedData;
};
const GetGameSignature = async ({ id }) => {
  console.log(id, "sig");
  const msgParams = JSON.stringify({
    domain: {
      chainId: CHAIN_ID,
      name: APP_NAME,
      verifyingContract: CONTRACT_ADDRESS,
      version: "1",
    },
    message: {
      id,
    },
    primaryType: "Key",
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
      Key: [{ name: "id", type: "string" }],
    },
  });

  const signedData = await providerState.get().request({
    method: "eth_signTypedData_v4",
    from: accountState.get(),
    params: [accountState.get(), msgParams],
  });
  return signedData;
};
const ClaimWinnings = ({ id }) => {
  return new Promise((resolve) => {
    if (accountState.get()) {
      contract.methods.redeemWinnings(id).send({
        from: accountState.get(),
        value: Web3.utils.toBN(0).toString(),
      });
    }
  });
};
const WithdrawAmount = () => {
  return new Promise((resolve) => {
    contract.methods.withdrawBalance().send({
      from: accountState.get(),
      value: Web3.utils.toBN(0).toString(),
    });
  });
};
export {
  GetPlayerBalance,
  InitContract,
  CreateAccount,
  AddBalance,
  ApproveProposal,
  GetGameSignature,
  ClaimWinnings,
  WithdrawAmount,
};

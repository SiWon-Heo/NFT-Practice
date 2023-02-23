import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "BOJioqUdccqj98r8wO87N4t1t0bI8cJT";
const GOERLI_PRIVATE_KEY = "489976841f85ad87eb09eef28f23fd0b073940be1e6d5b035c0188846e185eff";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};

export default config;

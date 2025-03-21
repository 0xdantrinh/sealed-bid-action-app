// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./SealedBidAuction.sol";

contract MockSealedBidAuction is SealedBidAuction {
    function getBidHash(uint256 auctionId, address bidder) external view returns (bytes32) {
        return auctions[auctionId].bidHashes[bidder];
    }

    function getRevealedBid(uint256 auctionId, address bidder) external view returns (uint256) {
        return auctions[auctionId].revealedBids[bidder];
    }
}

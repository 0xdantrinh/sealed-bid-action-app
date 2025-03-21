// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {Test, console} from "forge-std/Test.sol";
import {MockSealedBidAuction} from "../src/MockSealedBidAuction.sol";

contract SealedBidAuctionTest is Test {
    MockSealedBidAuction public auctionContract;
    address public seller;
    address public bidder1;
    address public bidder2;
    bytes32 public bidHash1;
    bytes32 public bidHash2;

    function setUp() public {
        seller = vm.addr(1);
        bidder1 = vm.addr(2);
        bidder2 = vm.addr(3);

        auctionContract = new MockSealedBidAuction();

        // Precompute bid hashes
        bidHash1 = keccak256(abi.encodePacked(bidder1, uint256(5 ether)));
        bidHash2 = keccak256(abi.encodePacked(bidder2, uint256(7 ether)));
    }

    function testCreateAuction() public {
        vm.prank(seller);
        auctionContract.createAuction("Vintage Rolex", "Luxury Swiss watch", 2 ether, 3 days);

        (string memory title, string memory description, uint256 minBid, uint256 endTime, address auctionSeller, , , , ) = auctionContract.auctions(0);
        
        assertEq(title, "Vintage Rolex");
        assertEq(description, "Luxury Swiss watch");
        assertEq(minBid, 2 ether);
        assertEq(auctionSeller, seller);
        assert(endTime > block.timestamp);
    }

    function testCommitBid() public {
        vm.prank(seller);
        auctionContract.createAuction("Rare Painting", "18th-century oil painting", 3 ether, 2 days);

        vm.prank(bidder1);
        auctionContract.commitBid(0, 5 ether);

        bytes32 storedHash = auctionContract.getBidHash(0, bidder1);
        assertEq(storedHash, bidHash1);
    }

    function testRevealBid() public {
        vm.prank(seller);
        auctionContract.createAuction("Signed Football", "Autographed by Messi", 1 ether, 1 days);

        vm.prank(bidder1);
        auctionContract.commitBid(0, 5 ether);

        vm.warp(block.timestamp + 10 hours);

        vm.prank(seller);
        auctionContract.endBidding(0);

        vm.prank(bidder1);
        auctionContract.revealBid(0, 5 ether);

        uint256 revealedBid = auctionContract.getRevealedBid(0, bidder1);
        assertEq(revealedBid, 5 ether);
    }

    function testEndAuction() public {
        vm.prank(seller);
        auctionContract.createAuction("CryptoPunk NFT", "Rare collectible NFT", 4 ether, 2 days);

        vm.prank(bidder1);
        auctionContract.commitBid(0, 5 ether);

        vm.prank(bidder2);
        auctionContract.commitBid(0, 7 ether);

        vm.warp(block.timestamp + 1 days);

        vm.prank(seller);
        auctionContract.endBidding(0);

        vm.prank(bidder1);
        auctionContract.revealBid(0, 5 ether);

        vm.prank(bidder2);
        auctionContract.revealBid(0, 7 ether);

        vm.warp(block.timestamp + 1 days);

        vm.prank(seller);
        auctionContract.endAuction(0);

        (, , , , , bool biddingEnded, bool ended, address winner, uint256 highestBid) = auctionContract.auctions(0);

        assertEq(ended, true);
        assertEq(winner, bidder2);
        assertEq(highestBid, 7 ether);
    }
}

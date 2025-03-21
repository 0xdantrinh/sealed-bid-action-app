// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "@openzeppelin/contracts/access/Ownable.sol";

contract SealedBidAuction is Ownable {
    constructor() Ownable(msg.sender) {}
    struct Auction {
        string title;
        string description;
        uint256 minBid;
        uint256 endTime;
        address seller;
        bool biddingEnded;
        bool ended;
        address highestBidder;
        uint256 highestBid;
        mapping(address => bytes32) bidHashes;
        mapping(address => uint256) revealedBids;
        address[] bidders;
    }

    uint256 public auctionCount;
    mapping(uint256 => Auction) public auctions;

    event AuctionCreated(uint256 auctionId, string title, uint256 minBid, uint256 endTime);
    event BidCommitted(uint256 auctionId, address bidder);
    event BidRevealed(uint256 auctionId, address bidder, uint256 bidAmount);
    event AuctionEnded(uint256 auctionId, address winner, uint256 winningBid);

    modifier onlyActiveAuction(uint256 auctionId) {
        require(block.timestamp < auctions[auctionId].endTime, "Auction has ended");
        _;
    }

    modifier onlyAfterAuctionEnd(uint256 auctionId) {
        require(block.timestamp >= auctions[auctionId].endTime, "Auction is still active");
        _;
    }

    function createAuction(
        string memory title,
        string memory description,
        uint256 minBid,
        uint256 duration
    ) external {
        uint256 auctionId = auctionCount++;
        Auction storage auction = auctions[auctionId];
        auction.title = title;
        auction.description = description;
        auction.minBid = minBid;
        auction.endTime = block.timestamp + duration;
        auction.seller = msg.sender;

        emit AuctionCreated(auctionId, title, minBid, auction.endTime);
    }

    function createBidCommitment(uint256 auctionId, address user, uint256 bidAmount) internal view returns (bytes32) {
        Auction storage auction = auctions[auctionId];
        require(bidAmount > 0, "Bid amount must be greater than 0");
        require(bidAmount > auction.minBid, "Bid amount must be greater than minimum bid");
        return keccak256(abi.encodePacked(user, bidAmount));
    }

    function commitBid(uint256 auctionId, uint256 bidAmount) external payable onlyActiveAuction(auctionId) {
        Auction storage auction = auctions[auctionId];
        require(bidAmount >= auction.minBid, "Bid is below minimum amount");
        require(auction.endTime > block.timestamp, "Auction has ended");
        require(auction.biddingEnded == false, "Bidding has ended");

        auction.bidHashes[msg.sender] = createBidCommitment(auctionId, msg.sender, bidAmount);
        auction.bidders.push(msg.sender);

        emit BidCommitted(auctionId, msg.sender);
    }

    function revealBid(uint256 auctionId, uint256 bidAmount) external {
        Auction storage auction = auctions[auctionId];
        require(auction.bidHashes[msg.sender] != bytes32(0), "No bid to reveal");
        require(auction.biddingEnded, "Auction Bidding has not ended");
        require(auction.ended == false, "Auction has ended");
        require(createBidCommitment(auctionId, msg.sender, bidAmount) == auction.bidHashes[msg.sender], "Invalid bid reveal");

        auction.revealedBids[msg.sender] = bidAmount;

        if (bidAmount > auction.highestBid) {
            auction.highestBidder = msg.sender;
            auction.highestBid = bidAmount;
        }

        emit BidRevealed(auctionId, msg.sender, bidAmount);
    }

    function endBidding(uint256 auctionId) external onlyActiveAuction(auctionId) {
        Auction storage auction = auctions[auctionId];
        require(!auction.biddingEnded, "Bidding already ended");
        require(auction.seller == msg.sender, "Only seller can end bidding");

        auction.biddingEnded = true;
    }

    function endAuction(uint256 auctionId) external onlyAfterAuctionEnd(auctionId) {
        Auction storage auction = auctions[auctionId];
        require(auction.biddingEnded, "Bidding has not ended");
        require(!auction.ended, "Auction already ended");
        require(auction.seller == msg.sender, "Only seller can end auction");

        auction.ended = true;
        emit AuctionEnded(auctionId, auction.highestBidder, auction.highestBid);
    }

    function getAuctionBidders(uint256 auctionId) external view returns (address[] memory) {
        return auctions[auctionId].bidders;
    }
}

import { abi as sealedBidAuctionABI } from './../eth/artifacts/contracts/SealedBidAuction.sol/SealedBidAuction.json';

export const wagmiContractConfig = {
  address: process.env.NEXT_PUBLIC_AUCTION_CONTRACT_ADDRESS,
  abi: sealedBidAuctionABI,
} as const;

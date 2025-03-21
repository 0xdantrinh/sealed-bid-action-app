import { useReadContract, useWriteContract } from 'wagmi';
import { wagmiContractConfig } from '../contracts';
import { BigNumberish } from 'ethers';

export function useAuction() {
  // ✅ Read auction count
  const {
    data: auctionCount,
    isError,
    isLoading,
  } = useReadContract({
    address: wagmiContractConfig.address,
    abi: wagmiContractConfig.abi,
    functionName: 'getAuctionCount',
    watch: true,
  });

  // ✅ Read a specific auction
  const getAuction = (auctionId: number) => {
    return useReadContract({
      ...wagmiContractConfig,
      functionName: 'auctions',
      args: [auctionId],
    });
  };

  // ✅ Write operations
  const { writeContract: createAuction } = useWriteContract();
  const { writeContract: commitBid } = useWriteContract();
  const { writeContract: revealBid } = useWriteContract();
  const { writeContract: endAuction } = useWriteContract();

  return {
    auctionCount, // Now using `useReadContract`
    getAuction,
    createAuction: (
      title: string,
      description: string,
      minBid: BigNumberish,
      duration: BigNumberish
    ) =>
      createAuction({
        ...wagmiContractConfig,
        functionName: 'createAuction',
        args: [title, description, minBid, duration],
      }),

    commitBid: (auctionId: BigNumberish, bidAmount: BigNumberish) =>
      commitBid({
        ...wagmiContractConfig,
        functionName: 'commitBid',
        args: [auctionId, bidAmount],
      }),

    revealBid: (auctionId: BigNumberish, bidAmount: BigNumberish) =>
      revealBid({
        ...wagmiContractConfig,
        functionName: 'revealBid',
        args: [auctionId, bidAmount],
      }),

    endAuction: (auctionId: number) =>
      endAuction({
        ...wagmiContractConfig,
        functionName: 'endAuction',
        args: [auctionId],
      }),
  };
}

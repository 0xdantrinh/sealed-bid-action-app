import { useState } from 'react';
import { useAuction } from '../hooks/useAuction';

const AuctionItem = ({ auctionId }: { auctionId: number }) => {
  const { getAuction, commitBid } = useAuction();
  const { data: auction } = getAuction(auctionId);
  const [bidHash, setBidHash] = useState('');

  if (!auction) return <p>Loading auction...</p>;

  return (
    <div className="auction-item">
      <h3>{auction.title}</h3>
      <p>{auction.description}</p>
      <p>Min Bid: {auction.minBid} ETH</p>
      <p>Status: {auction.ended ? 'Ended' : 'Active'}</p>

      {!auction.ended && (
        <>
          <input
            type="text"
            placeholder="Bid Hash"
            onChange={(e) => setBidHash(e.target.value)}
          />
          <button onClick={() => commitBid(auctionId, bidHash)}>
            Commit Bid
          </button>
        </>
      )}
    </div>
  );
};

export default AuctionItem;

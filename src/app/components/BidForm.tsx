import { useState } from 'react';
import { useAuction } from '../hooks/useAuction';

const BidForm = () => {
  const { revealBid, endAuction } = useAuction();
  const [auctionId, setAuctionId] = useState('');
  const [bidAmount, setRevealedBid] = useState('');

  return (
    <div>
      <h2>Reveal Bid</h2>
      <input
        placeholder="Auction ID"
        onChange={(e) => setAuctionId(e.target.value)}
      />
      <input
        placeholder="Revealed Bid (USD)"
        onChange={(e) => setRevealedBid(e.target.value)}
      />
      <button onClick={() => revealBid(Number(auctionId), bidAmount)}>
        Reveal Bid
      </button>

      <h2>End Auction</h2>
      <input
        placeholder="Auction ID"
        onChange={(e) => setAuctionId(e.target.value)}
      />
      <button onClick={() => endAuction(Number(auctionId))}>End Auction</button>
    </div>
  );
};

export default BidForm;

import { useState } from 'react';
import { useAuction } from '../hooks/useAuction';

const AuctionForm = () => {
  const { createAuction } = useAuction();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [minBid, setMinBid] = useState('');
  const [duration, setDuration] = useState('');

  return (
    <div>
      <h2>Create Auction</h2>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder="Min Bid (ETH)"
        onChange={(e) => setMinBid(e.target.value)}
      />
      <input
        placeholder="Duration (minutes)"
        onChange={(e) => setDuration(e.target.value)}
      />
      <button
        onClick={() =>
          createAuction(title, description, minBid, Number(duration) * 60)
        }
      >
        Create Auction
      </button>
    </div>
  );
};

export default AuctionForm;

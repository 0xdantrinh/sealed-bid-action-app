import { useEffect, useState } from 'react';
import { useAuction } from '../hooks/useAuction';
import AuctionItem from './AuctionItem';

const AuctionList = () => {
  const { auctionCount } = useAuction();
  console.log(auctionCount); // ✅ Logs the response
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    console.log(auctionCount); // ✅ Logs the response
    if (auctionCount?.data !== undefined && auctionCount?.data !== null) {
      setCount(Number(auctionCount.data)); // ✅ Extract the actual number
    }
  }, [auctionCount?.data]); // ✅ Only runs when auctionCount.data updates

  return (
    <div>
      <h2>Live Auctions</h2>
      {count !== null ? (
        Array.from({ length: count }).map((_, index) => (
          <AuctionItem key={index} auctionId={index} />
        ))
      ) : (
        <p>Loading auctions...</p>
      )}
    </div>
  );
};

export default AuctionList;

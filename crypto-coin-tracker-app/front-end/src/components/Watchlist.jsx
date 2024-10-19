import { useState, useEffect } from "react";

const Watchlist = () => {
  const [watchItems, setWatchItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();  //initializing the fetched data
  }, []);

  //function to retrive all watchlist items 
  const fetchData = async () => {
    console.log("Fetching watchlist data...");
    try {
      const response = await fetch("http://localhost:3002/watchlist");

      if (!response.ok) {
        throw new Error("Failed to fetch watchlist data");
      }

      const data = await response.json();
      console.log("Fetched watchlist data: ", data);
      setWatchItems(data);
    } catch (error) {
      console.error("Error fetching watchlist:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to remove an item from the watchlist
  const handleDelete = async (symbol) => {
    const confirmed = window.confirm(`Are you sure you want to remove ${symbol} from your watchlist?`);
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:3002/watchlist?symbol=${symbol}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete item from watchlist');
        }

        // Update the local state to reflect deletion
        setWatchItems((prevItems) => prevItems.filter(item => item.symbol !== symbol));
        // alert('Item removed from watchlist!');
        //window.location.reload(); // Reload the page to refresh the data
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete item from watchlist');
      }
    }
  };

  if (isLoading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center", color: "red" }}>{error.message}</div>;
  }

  return (
    <div className="app">
      <h1>My Watchlist</h1>

      <div className="crypto-container">
        {watchItems.length > 0 ? (
          watchItems.map((item) => (
            <div key={item.symbol} className="crypto-card">
                <img
                  src={'https://s2.coinmarketcap.com/static/img/coins/64x64/'+item.symbol+'.png'}
                    alt={item.name}
                    width="32" height="32"

                  
                />
              <h2>{item.name}</h2>
              <p>Current Price: ${item.price.toFixed(2)}</p>
              <p>Market Cap: ${item.marketCap.toLocaleString()}</p>
              <p>24h Volume: ${item.volume24h.toLocaleString()}</p>
              <p>24h Change: {item.percentChange24h.toFixed(2)}%</p>
              <button className="button-delete"
                style={{ color: "red", height: 40, width: 100 }} 
                onClick={() => handleDelete(item.symbol)}>
                
                <i className='fa-solid fa-trash'></i>
              </button>
            </div>
          ))
        ) : (
          <p>No items in your watchlist.</p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;

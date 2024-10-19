import '@fortawesome/fontawesome-free/css/all.min.css'

const CryptoCard = (props) => {
    const handleAddWatchlist = async () => {
      const watchlistItem = {
        id: props.id,
        name: props.name,
        price: props.quote.USD.price,
        marketCap: props.quote.USD.market_cap,
        volume24h: props.quote.USD.volume_24h,
        percentChange24h: props.quote.USD.percent_change_24h,
      };
  
      try {
        const response = await fetch('http://localhost:3002/watchlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(watchlistItem),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add to watchlist');
        }
  
        const data = await response.json();
        alert(`${data.item.name} Added to Watchlist` );
      } catch (error) {
        console.error('Error adding to watchlist:', error);
        alert('Failed to add to watchlist');
      }
    };
    return <>
    <div class="crypto-card">               
            {/* <img src={props.Icon} alt={props.name} /> */}
                <img
                  src={'https://s2.coinmarketcap.com/static/img/coins/64x64/'+props.id+'.png'}
                    alt={props.name}
                    width="32" height="32"

                  
                />
                <h2>{props.name}</h2>
                <p>Current Price:{props.quote.USD.price.toFixed(2)}</p>
                <p> Market Cap:{props.quote.USD.market_cap.toLocaleString()} </p>
                <p>24h Volume:{props.quote.USD.volume_24h.toLocaleString()}  </p>
                <p>24h Change:{props.quote.USD.percent_change_24h.toLocaleString()}  </p>
                <button style={{color:"red",height:40, width:50}} onClick={handleAddWatchlist}><i className='fa-solid fa-heart'></i></button>
            </div>
    
    </>
}

export default CryptoCard;
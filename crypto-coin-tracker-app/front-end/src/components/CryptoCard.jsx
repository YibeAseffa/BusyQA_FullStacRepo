import '@fortawesome/fontawesome-free/css/all.min.css'
const CryptoCard=(props)=>{
    // console.log('card data'+JSON.stringify(props))
    const handleAddWatchlist=()=>{
        alert('Added to Watchlist');
    }
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
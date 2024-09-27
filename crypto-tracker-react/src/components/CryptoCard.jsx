
const CryptoCard=(props)=>{
    return <>
    <div class="crypto-card">               
            <img src={props.Icon} alt={props.Name} />
                <h2>{props.Name}</h2>
                <p>Current Price:{props.Price}</p>
                <p> Market Cap:{props.MarketCap} </p>
                <p>24h Volume:{props.Volume} </p>
                <p>24h Change:{props.Change} </p>
            </div>
    
    </>
}

export default CryptoCard;
import { useState,useEffect } from "react";
import SearchPanel from "./SearchPanel";
import CryptoCard from "./CryptoCard";



const cryptoCoins=[{
    Name:"Bitcoin",
    Price:"$59789.0",
    MarketCap:"$1,175,931,107,572.00",
    Volume:" $34,395,507",
    Change:"-6.25%",
    Icon:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"    
},
{
    Name:"Ethereum",
    Price:"$59789.0",
    MarketCap:"$1,175,931,107,572.00",
    Volume:" $34,395,507",
    Change:"-6.25%",
    Icon:"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628"  
},
{
    Name:"Tether",
    Price:"$59789.0",
    MarketCap:"$1,175,931,107,572.00",
    Volume:" $34,395,507",
    Change:"-6.25%",
    Icon:"https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"  
}
];


const coinMarketCapApiKey='f8489ce9-20d0-4cb7-a9e5-e9e090446d60'
const coinMarketCapApiUrl='https://pro-api.coinmarketcap.com/v1/exchange/listings/latest'
                         

const CryptoDashboard=()=>{
    
    const [coinData,setCoinData]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError]=useState(null);
    

    const handleSearch=(searchText)=>{
        
        if(searchText===''){
            alert('Please enter a crypto name to search');
            setCoinData(cryptoCoins);

            return;

        }
        
        //Filter the crypto coin from the data array list usinf searchText
        //ES6 Array filter method to search  
        const filterCoins= coinData.filter(coin=>coin.Name.includes(searchText));
        setCoinData(filterCoins)
    }
    //component mounted fire once ==> empty dependency array

    useEffect(()=>{
        console.log('component mounted'); 
        fetchData();
     },[]
    )
    const fetchData=async()=>{
        console.log('fetching data')
        

        try{
        const response = await fetch(coinMarketCapApiUrl,{
         
            headers:{
                'X-CMC_PRO_API_KEY':coinMarketCapApiKey
            },
            params:{

            },
            
        });
       
        // console.log("resp"+response);
         
        if(!response.ok){
          
            throw new error('Error: Can not load data...');
        }

        const data = await response.json();    
        console.log('fetching datasss'+response)
        console.log('coin market data'+data);
        setCoinData(data);
         
    
        }
        catch(error){
          setError(error)
        }
        finally{
            setIsLoading(false);

        }
      

      

        
    }
    if(isLoading){
        return <div style={{textAlign:"center"}}>Loading...</div>
    }
    if(error){
        return <div style={{textAlign:"center",color:"red"}}>{error.message}</div>
    }

    return  <>
    <div className="app">
     <h1> Crypto Coin Tracker</h1>
     <SearchPanel searchCallback={handleSearch}/>  
         <div className="crypto-container">
            {
                coinData.map((currentCoin)=>{
                    return <CryptoCard {...currentCoin} />
                })
            }
            
        </div>  

     
     </div>
    </>
        

    
}


export default CryptoDashboard;
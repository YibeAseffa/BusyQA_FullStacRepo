import { useState,useEffect } from "react";
import SearchPanel from "./SearchPanel";
import CryptoCard from "./CryptoCard";
import { useSyncExternalStore } from "react";



const coinMarketCapApiKey='f8489ce9-20d0-4cb7-a9e5-e9e090446d60'
const coinMarketCapApiUrl='https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'

const CryptoDashboard=()=>{
    //default data to the coin array
    const [coinData,setCoinData]=useState([]);
    //data after filteres
    const[filterData,setFilterData]=useState([]);
    //sorting data
    const[sortType,setSortType]=useState("market_cap");
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError]=useState(null);
  //pass to search panel component to get selected value out   
    const handleSortType=(sortType)=>{
          console.log('sort type changed'+sortType);
          setSortType(sortType);
    }

    const handleSearch=(searchText)=>{
        
        if(searchText===''){
            //alert('Please enter a crypto name to search');
            //reset the full filtered list to default
            setFilterData(coinData);

            return;

        }
        
        //Filter the crypto coin from the data array list usinf searchText
        //ES6 Array filter method to search  
        const filterCoins= coinData?.filter(coin=>coin.name.toLowerCase().includes(searchText.toLowerCase()))
                                     .sort((a,b)=>b[sortType]- a[sortType]);
        console.log(filterCoins)
        setFilterData(filterCoins)
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

        const rawData = await response.json(); 
        //  console.log('coin market data'+JSON.stringify(data));
        //set the initial default data, one time load
        setCoinData(rawData.data);
        //set the working filtered data
        setFilterData(rawData.data);
         
    
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
     <h1> <i className="fa-solid fa-coins"></i> Crypto Coin Tracker</h1>
     <SearchPanel 
     searchCallback={handleSearch}
     sortTypeCallback={handleSortType}
     />  
         <div className="crypto-container">
            {
                filterData?.map((currentCoin)=>{
                    return <CryptoCard {...currentCoin} />
                })
            }
            
        </div>  

     
     </div>
    </>
        

    
}


export default CryptoDashboard;
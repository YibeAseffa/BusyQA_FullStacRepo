import {useState,UseEffect, useEffect} from 'react'

const Watchlist= ()=>{
    const [watchItems, setWatchItems] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        console.log('items fetched')
        try{
           const response = await fetch(`http://localhost:3002/watchlist`);
           
           if(!response){
            throw new Error("Error occured fetching watchlist");
           }
           const rawData = await response.json();

           console.log(`Fetched Watchlist data ${JSON.stringify(rawData)}`)

           setWatchItems(rawData);
        }
        catch(e){
            console.log(`error fetching items: ${e}`)
        }
    }

    return <>
      <h1>My WatchList</h1>
        
      <div class="crypto-card">   
            {
            watchItems.map((item) => {
                  return <li>{item.symbol}</li>
            })  
            }
        </div>
    
    
    </> 


}
export default  Watchlist;
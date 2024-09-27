import { useState } from "react"; //Implementing hooks using states

const SearchPanel =(props)=>{
    
    const [searchText, setSearchText]=useState(''); //states for search panel

    const handleClick=()=>{
        alert('button clicked');
    }
    const handleSelectChange=()=>{
        alert('select change');
    }
    const handleKeyDown=(e)=>{  
       //handling key down for ENTER button. 
       if(e.keyCode===13){
        //    alert('enter key pressed');
           //filter the crypto list using search trigger to parent
           props.searchCallback(searchText); 

       }
         
       
       
    }
    const handleOnChange=(e)=>{
        setSearchText(e.target.value); //update search text state
    }
    return <>
     <input
         onKeyDown={handleKeyDown}
         onChange={handleOnChange}
         type="text"
         placeholder="Search for CryptoCurrency" 
         value={searchText}/>
     <select onChange={handleSelectChange}> 
                    <option value="current_price">Current Price</option>
                    <option value="market_cap">Market Cap</option>
                    <option value="total_volume">24h Volume</option>
                    <option value="price_change">24h Change</option>
                </select>
    
    <button onClick={handleClick}>Search</button>
    </>
}

export default SearchPanel;
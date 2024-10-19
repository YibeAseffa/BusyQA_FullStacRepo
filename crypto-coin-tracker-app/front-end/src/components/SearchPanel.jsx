import { useState } from "react"; //Implementing hooks using states

const SearchPanel =(props)=>{
    
    const [searchText, setSearchText]=useState(''); //states for search panel

    const handleClick=()=>{
        //alert('button clicked');
        props.searchCallback(searchText); 
    }
    const handleSortTypeChnage=(event)=>{
        
        //alert('select change');
        props.sortTypeCallback(event.target.value)
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
     <select onChange={handleSortTypeChnage}> 
                    <option value="current_price">Current Price</option>
                    <option value="market_cap">Market Cap</option>
                    <option value="total_volume">24h Volume</option>
                    <option value="price_change">24h Change</option>
                </select>
    
    <button style={{height:40, width:100}} onClick={handleClick}><i className='fa-solid fa-search'></i>Search</button>
    </>
}

export default SearchPanel;
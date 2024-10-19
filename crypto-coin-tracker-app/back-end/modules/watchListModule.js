
const WatchItem = require('../models/watchItem');


const addItem = async (symbol)=>{

    try {
        if(!symbol){
            console.log('ivalid symbol')
        }
        console.log(`item ${symbol} added to watch list`)
    
        //adding symbol
        
        const item = new WatchItem({
            symbol:symbol,
            dateCreated:Date.now()
        })
        
        await item.save();
    }
    catch(e){
        console.log(`error adding items: ${e}`)
    }

 

}

const removeItem= async (symbol)=>{

    try{

        if(!symbol){
            console.log('invalid  symbol to remove')
        }
          
          
        console.log(`item ${symbol} removed from  watch list`)
    
        await WatchItem.deleteOne({symbol:symbol});
    }
    catch(e){
        console.log(`error deleting items: ${e}`)
    }

   

}

const getItems= async()=>{

    try{
        console.log(`watch list items  `)
    
        const items = await WatchItem.find();
    
        
        return items
    }
    catch(e){
        console.log(`error fetching items: ${e}`)
    }
    

}

module.exports={
    addItem,
    removeItem,
    getItems
}

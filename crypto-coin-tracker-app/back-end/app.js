const cors = require('cors')
const express = require('express');
const {connectToDb} = require('./database/connectionManager')
const WatchItem = require('./models/watchItem');  // Import Mongoose model
const watchListModule =  require('./modules/watchListModule')




const app = new express();                      //instance of express

app.use(express.json()); // For parsing JSON request bodies

const port = 3002;    //make free port 3000 for frontend

//Setup middleware CORS
app.use(cors());




//ROUTES

//retriving all watchlists

app.get('/watchlist', async (req, res) => {
    try {
      const data = await WatchItem.find();  // Fetch all watchlist items from the DB
      res.send(data);
    } catch (error) {
      console.error('Error retrieving watchlist:', error);
      res.status(500).send({ error: 'Failed to retrieve watchlist' });
    }
  });
  // adding to watchl list

app.post('/watchlist', async (req,res)=>{
    
    const { id, name, price, marketCap, volume24h, percentChange24h } = req.body;
    try {
        const newItem = new WatchItem({
          symbol: id,
          name,
          price,
          marketCap,
          volume24h,
          percentChange24h,
        });
    
        await newItem.save();  // Save to MongoDB
        res.status(201).send({ message: 'Item added to watchlist', item: newItem });
      } catch (error) {
        console.error('Error adding item to watchlist:', error);
        res.status(500).send({ error: 'Failed to add item to watchlist' });

      }

    // const {symbol}=req.query;        //using request.query as a middleware
    //console.log(JSON.stringify(req.query));

   // watchListModule.addItem(symbol);

   // res.send()
}) 

//deleting a watch list

app.delete('/watchlist', async (req, res) => {
    const { symbol } = req.query;
    try {
      await WatchItem.deleteOne({ symbol });  // Delete the item from the database
      res.status(200).send({ message: `Item ${symbol} removed from watchlist` });
    } catch (error) {
      console.error('Error removing item from watchlist:', error);
      res.status(500).send({ error: 'Failed to remove item from watchlist' });
    }
  });

//connection string for Express web server and MongoDb database
connectToDb().then(()=>{
    console.log('Mongodb successfully connected')

    //initializing our server at specified port
app.listen(port,()=>{
    console.log(`Express server  with CORS-enabled  started on port ${port}`)
})

})


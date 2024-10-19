const cors = require('cors')
const express = require('express');
const {connectToDb} = require('./database/connectionManager')



const app = new express();                      //instance of express
const watchListModule =  require('./modules/watchListModule')

const port = 3002;    //make free port 3000 for frontend

//Setup middleware CORS
app.use(cors());




//ROUTES

//retriving all watchlists
app.get('/watchlist', async (req, res) => {
    console.log('Get for watchlist');

    const data= await watchListModule.getItems();
    res.send(data);
  });

  // adding to watchl list
app.post('/watchlist',(req,res)=>{

    const {symbol}=req.query;        //using request.query as a middleware
    console.log(JSON.stringify(req.query));

    watchListModule.addItem(symbol);

    res.send()
}) 

//deleting a watch list

app.delete('/watchlist', async (req,res)=>{
    
    const {symbol} = req.query;
    await watchListModule.removeItem(symbol);


})


//connection string for Express web server and MongoDb database
connectToDb().then(()=>{
    console.log('Mongodb successfully connected')

    //initializing our server at specified port
app.listen(port,()=>{
    console.log(`Express server  with CORS-enabled  started on port ${port}`)
})

})


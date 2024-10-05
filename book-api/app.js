
const express=require('express');
const app=express();
const port=3000;

const books=require('./books');

//middleware to parse JSON requests
app.use(express.json());

//define a GET route to retrive all books
app.get('/api/books',(req,res)=>{
    res.json(books);
});

//start the server
app.listen(port,()=>{
    console.log('server is running on port '+port);
});
//app.js
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

//middleware to parse JSON requests
app.use(bodyParser.json());

//importing the tasks router
const tasksRouter=require('./tasks');

//use the tasks router for routes starts with './tasks/
app.use('/tasks',tasksRouter);

//deining the port 3000 fpr our sever
const PORT =process.env.PORT||3000;

//start the server
app.listen(PORT,()=>{
    console.log('server is running on port '+PORT);
});
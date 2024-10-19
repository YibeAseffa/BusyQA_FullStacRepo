
const mongoose = require('mongoose');

const dburl="mongodb://127.0.0.1:27017/crypto-coin-tracker";

const connectToDb = async ()=>{

  
const dbConnection = mongoose.connection;

//set event listners for our db connection status
dbConnection.on('open',()=>{
    console.log('Succesfully connected to MongoDb');
})

dbConnection.on('error',(e)=>{
    console.log(`Database connection error ${e}`);
})

await mongoose.connect(dburl);


}

module.exports={
    connectToDb
}



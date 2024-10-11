const mongoose = require('mongoose');
const User = require('./user');

//connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydb',{
useNewUrlParser:true,
useUnifiedTopology:true,

});

const db = mongoose.connection;

db.on('error',(error)=>{
    console.error('MongoDB Connection error',error);
});

db.once('open',async()=>{
    console.log('Connected to MongoDB');

try{
    //create a new user interface

    const newUser=new User({
        name:'John Doe',
        email:'john@example.com',
        age:30,
    });

    //save  the user to the database using async/await
    await newUser.save();

    console.log('user saved successfully')
} catch(error){
    console.error('Error saving user',error);
} finally {
    mongoose.connection.close();
}
});

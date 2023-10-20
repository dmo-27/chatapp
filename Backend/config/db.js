//const express = require('express');
const mongoose = require('mongoose');

const connectDB =async()=>{
try{
const conn = await mongoose.connect('mongodb+srv://dhachamaotari:123@cluster0.neh37wy.mongodb.net/?retryWrites=true&w=majority',{
    //useNewParser:true,
    useUnifiedTopology:true,
    //useFindAndModify:true,
});
console.log(`MONGODB:${conn.connection.host}`)
}catch(error){
console.log(`Error:${error.message}`);
process.exit();
}
}

module.exports = connectDB ;
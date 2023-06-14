// define node app and mongodb database connectivity

// import mongoose in connection.js file
const mongoose=require('mongoose')
// to get connection string from .env file : process.env
const connectionSrtring=process.env.DATABASE
// connect node app with mongodb using connection string with help of mongoose
mongoose.connect(connectionSrtring,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("mongodb Atlas connected successfully");
}).catch(()=>{
    console.log("mongodb connection error:");
})



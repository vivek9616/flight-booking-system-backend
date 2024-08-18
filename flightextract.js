const http=require('http');
const express=require('express');
const cors=require("cors");
const app=express();
const {MongoClient}= require('mongodb');
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
app.use(cors());
 app.use('/getflightsdata',async(req,resp,next) =>{
    let result= await client.connect();
    let db=result.db('flightbooking');
    let collection=db.collection('flights');
    let output= await collection.find({}).toArray();
    console.log(output);
    resp.send(JSON.stringify(output));

});
app.use(cors());
http.createServer(app).listen(4500);
const express=require("express");
const citiesRouter = require("./Routes/cities");
const app=express();

var cors = require('cors');
app.use(cors());

app.use(express.json());

require("./Database/connect");

app.use('/api', citiesRouter)

app.listen(
    5000,
    console.log("Server is running in dev mode in port 5000")
);
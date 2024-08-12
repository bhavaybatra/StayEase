const mongoose=require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_url="mongodb://127.0.0.1:27017/StayEase";

main().then(()=>{
    console.log("connected to db");
}).catch(err=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongo_url);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:"66b65eb9d8e37ba7eb94b2e9"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
}
initDB();

const mongoose = require("mongoose");
const Listing = require("../models/Listing.js");
const initData = require("./data.js");
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderLust');
}

main()
.then((res) => {
    console.log("connected");
})
.catch((err) => {
    console.log(err);
});


const insertData = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '6a9d5e96a5d65919a972e3b6'}));
    await Listing.insertMany(initData.data);
    console.log("data initialized");
};
insertData();
const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        let result = await mongoose.connect("mongodb+srv://noura:noura123@shop.6upbb.mongodb.net/?retryWrites=true&w=majority");
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
};

module.exports = dbConnect;
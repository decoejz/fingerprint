const mongoose = require("mongoose");

const Computer = new mongoose.Schema({
    ipv4:{
        type: String,
        required: true
    },
    ipv6: String,
});

module.exports = mongoose.model("Computer", Computer);
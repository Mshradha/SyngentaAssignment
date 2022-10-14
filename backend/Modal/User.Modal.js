const mongoose = require("mongoose");


const oraga = new mongoose.Schema({
    property :{type:Array},
    region :  {type: String},
    field : {type:String},
    crop_cycle : {type : String} 
})

const DataModal = mongoose.model("database", oraga);

module.exports = DataModal;
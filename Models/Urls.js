const mongoose = require("mongoose");

const urlDataSchema = new mongoose.Schema({
    longURL:{
        type:String,
        required:true,
        unique:true
    },
    shortURL:{
        type:String,
        required:false
    },
    clickCount:{
        type:Number,
        default:0
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{
    timestamps:true
})

const UrlData = mongoose.model("UrlData",urlDataSchema);
module.exports = UrlData;
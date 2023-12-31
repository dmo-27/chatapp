const mongoose = require("mongoose");

const messageModel = new mongoose.Schema(
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    content:{
        type : String,
        trim : true
    },
    chat:{
      type:mongoose.Schema.Types.ObjectId,
        ref:'User'  
    },
    {
        timestamp:true
    }
)
const Message = mongoose.model('Message',messaageModel);
module.exports = Message; 
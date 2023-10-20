const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
    {
        chatName:{
            type:String,
            trim:true
        },
        isGroupChat:{
            type:Boolean,
            default:false
        },
        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },],
        latestMsg:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
        },
        GroupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },

    },
    {
        timestamps:true,
    }
)

const Chat = mongoose.model("Chat",chatModel);

module.exports = Chat;
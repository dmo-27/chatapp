const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userModel = new mongoose.Schema(
    {
    name:{
        type:String ,
        required : true
    },
    email:{
        type:String,
        required : true,
        unique:true
    },
    password:{
        type:String,
        required : true 
    },
    pic:{
        type:String,
        default:'https://media.cnn.com/api/v1/images/stellar/prod/200614084611-sushant-singh-rajput-restricted.jpg?q=x_3,y_1016,h_1684,w_2993,c_crop'
    }
    }
);



userModel.pre("save",async function (next){
    if(!this.isModified){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);

})

userModel.methods.matchPassword = async function(enteredPassword){
return await bcrypt.compare(enteredPassword,this.password);
}



const User = mongoose.model("User",userModel);



module.exports = User;
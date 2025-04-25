const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName : {
        type:String,
        required:true
    },
    lastName : {
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    address: {
        type:String,
    },
    isVerified : {
        type:Boolean,
        default : false
    },
    dob:Number,
    failedAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date, default: null },
})
const User = mongoose.model("User", userSchema)
module.exports = User
const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema

const tokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true
    },
    otp : {
        type:String
    },
    user:{
        type:ObjectId,
        ref:"User"
    },
    verified: {
        type: Boolean,
        default: false
      },
    createdAt: {
        type:Date,
        default:Date.now(),
        expires:86400
    }
})
const Token = mongoose.model('Token', tokenSchema)
module.exports = Token
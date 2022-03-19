const mongoose = require("mongoose");

const apiusersSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name:{
    type:String,
    required:true
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address:{
    type:String,
    required: true
  },
  phone:{
    type:String,
    required: true
  },
  website:{
    type:String,
    required: true
  },
  company:{
    type:String,
    required: true
  },
  Date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
module.exports = mongoose.model("apiUsersdata", apiusersSchema);

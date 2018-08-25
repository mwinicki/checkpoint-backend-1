
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  "name":{
    required:true,
    type: String
  },
  "date":{
    required:true,
    type:Date
  },
  "message":{
    required:true,
    type: String
  }

})

module.exports = schema;
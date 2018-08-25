const mongoose = require ("mongoose");

const schema = new mongoose.Schema({
  "orderDate":{
    required:true,
    type: Date
  },
  "orderTime":{
    required:true,
    type:Date
  },
  "amount":{
    required:true,
    type:Number
  }

})

module.exports = schema;

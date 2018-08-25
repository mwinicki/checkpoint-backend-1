const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  "task":{
    required: false,
    tupe: String
  },
  "date":{
    required: true,
    type: Date
  }
});

module.exports = schema;
const mongoose = require ("mongoose");
const schema = require ("../schemas/messageSchema");

module.exports = mongoose.model('Message',schema);

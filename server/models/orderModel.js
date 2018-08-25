const mongoose = require('mongoose')

const schema = require('../schemas/orderSchema')

module.exports = mongoose.model('Order',schema);
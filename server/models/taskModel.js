const mongoose = require('mongoose')

const schema = require('../schemas/taskSchema')

module.exports = mongoose.model('Task',schema)
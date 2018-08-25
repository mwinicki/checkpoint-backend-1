const Message = require("../models/MessageModel");

module.exports.list = ((req, res) => {
    Message.find({}).exec()
    .then(messages => {
        res.json(messages)
    })
})

module.exports.show = ((req, res) => {
    Message.findById({"_id":req.params.id}).exec()
    .then(message => {
        res.json(message)
    })
})

module.exports.create = ((req, res) => {
    const newMessage = new messageModel({
        name: req.body.name,
        date: new Date(),
        message: req.body.message
    })
    newMessage.save()
    .then(savedMessage => {
        res.json(savedMessage)
    })
})
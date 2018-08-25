const Task = require("../models/taskModel");

module.exports.list = ((req, res) => {
    Task.find({}).exec()
    .then(tasks => {
        res.json(tasks)
    });
});

module.exports.show = ((req, res) => {
    Task.findById({"_id":req.params.id}).exec()
    .then(task => {
        res.json(task)
    })
})

module.exports.create = ((req, res)=>{
    const newTask = new Task({
      task: req.body.task,
      date: req.body.date
    })
    newTask.save()
    .then(savedTask=>{
      res.json(savedTask)
    })
  })

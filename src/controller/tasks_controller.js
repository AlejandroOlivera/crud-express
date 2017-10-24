const Tasks = require("../models/task");

exports.index = (req, res) => {
  Tasks.find({}, (err, tasks) => {
    if (err) throw err;
    res.render("index", {
      title: "Welcome To Node",
      tasks: tasks
    });
  });
};

exports.new = (req, res) => {

  let body = req.body
  body.status = false
  Tasks.create(body, (err, task) =>{
    if (err) throw err
    res.redirect('/')
  })

  console.log(body)

}

exports.update = (req, res) =>{
  let id = req.params.id
  Tasks.findById((id, err, task) =>{
    if (err) throw err
    task.status = !task.status
    task.save()
        .then(() => res.redirect('/'))
  })
}

exports.destroy = (req, res) => {
  let id = req.params.id
  Tasks.remove({_id: id}, (err, task) =>{
    if (err) throw err
    res.redirect('/')
    
  })
}
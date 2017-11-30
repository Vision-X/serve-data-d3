const express = require('express');
const students = require('./data/students');
const cors = require('cors');
const app = express();

function findById(data, id) {
    for (let i =0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i];
        }
    }
    return null;
}

app.use(cors());

app.get("/", function(req, res) {
  res.json({data: students});
})

app.get("/:id", function(req, res) {
  var currentStudent = findById(students, req.params.id);
  if (!currentStudent) {
    res.status(404);
    res.json({
        error: {
            message: "No Record Found, Homie!"
        }
    });
  } else {
    res.json({data: currentStudent});
  }
})

app.listen(8080);

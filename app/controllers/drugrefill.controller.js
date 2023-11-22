<<<<<<< HEAD
const Drugrefill = require("../models/drugrefill.model.js");

// Create and Save a new Drugrefill

// Retrieve all Drugrefills from the database.
exports.findAll = (req, res) => {
  Drugrefill.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving drugrefills.",
      });
    else res.send(data);
  });
};
=======
const Drugrefill = require("../models/drugrefill.model.js");

// Create and Save a new Drugrefill

// Retrieve all Drugrefills from the database.
exports.findAll = (req, res) => {
  Drugrefill.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving drugrefills.",
      });
    else res.send(data);
  });
};
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5

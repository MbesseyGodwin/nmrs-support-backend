<<<<<<< HEAD
const Htsresult = require("../models/htsresult.model.js");

// Retrieve all Htsresults from the database.
exports.findAll = (req, res) => {
  Htsresult.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving htsresults.",
      });
    else res.send(data);
  });
=======
const Htsresult = require("../models/htsresult.model.js");

// Retrieve all Htsresults from the database.
exports.findAll = (req, res) => {
  Htsresult.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving htsresults.",
      });
    else res.send(data);
  });
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
};
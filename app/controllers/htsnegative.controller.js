const Htsnegative = require("../models/htsnegative.model.js");

// Create and Save a new Htsnegative
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Htsnegative
  const htsnegative = new Htsnegative({
    htsnegativeData: req.body.htsnegativeData,
    userId: req.body.userId,
    date: req.body.date,
  });

  // Save Htsnegative in the database
  Htsnegative.create(htsnegative, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Htsnegative.",
      });
    else res.send(data);
  });
};

// Retrieve all Htsnegatives from the database.
exports.findAll = (req, res) => {
  Htsnegative.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving htsnegatives.",
      });
    else res.send(data);
  });
};

// Find a single Htsnegative with a htsnegativeId
exports.findOne = (req, res) => {
  Htsnegative.findById(req.params.htsnegativeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Htsnegative with id ${req.params.htsnegativeId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Htsnegative with id " + req.params.htsnegativeId,
        });
      }
    } else res.send(data);
  });
};

// Update a Htsnegative identified by the htsnegativeId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Htsnegative.updateById(
    req.params.htsnegativeId,
    new Htsnegative(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Htsnegative with id ${req.params.htsnegativeId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating Htsnegative with id " + req.params.htsnegativeId,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Htsnegative with the specified htsnegativeId in the request
exports.delete = (req, res) => {
  Htsnegative.remove(req.params.htsnegativeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Htsnegative with id ${req.params.htsnegativeId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Htsnegative with id " + req.params.htsnegativeId,
        });
      }
    } else res.send({ message: `Htsnegative was deleted successfully!` });
  });
};

// Delete all Htsnegatives from the database.
exports.deleteAll = (req, res) => {
  Htsnegative.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all htsnegatives.",
      });
    else res.send({ message: `All Htsnegative were deleted successfully!` });
  });
};

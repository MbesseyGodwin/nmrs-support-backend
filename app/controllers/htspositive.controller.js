const Htspositive = require("../models/htspositive.model.js");

// Create and Save a new Htspositive
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Htspositive
  const htspositive = new Htspositive({
    htspositiveData: req.body.htspositiveData,
    userId: req.body.userId,
    date: req.body.date,
  });

  // Save Htspositive in the database
  Htspositive.create(htspositive, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Htspositive.",
      });
    else res.send(data);
  });
};

// Retrieve all Htspositives from the database.
exports.findAll = (req, res) => {
  Htspositive.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving htspositives.",
      });
    else res.send(data);
  });
};

// Find a single Htspositive with a htspositiveId
exports.findOne = (req, res) => {
  Htspositive.findById(req.params.htspositiveId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Htspositive with id ${req.params.htspositiveId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Htspositive with id " + req.params.htspositiveId,
        });
      }
    } else res.send(data);
  });
};

// Update a Htspositive identified by the htspositiveId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Htspositive.updateById(
    req.params.htspositiveId,
    new Htspositive(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Htspositive with id ${req.params.htspositiveId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating Htspositive with id " + req.params.htspositiveId,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Htspositive with the specified htspositiveId in the request
exports.delete = (req, res) => {
  Htspositive.remove(req.params.htspositiveId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Htspositive with id ${req.params.htspositiveId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Htspositive with id " + req.params.htspositiveId,
        });
      }
    } else res.send({ message: `Htspositive was deleted successfully!` });
  });
};

// Delete all Htspositives from the database.
exports.deleteAll = (req, res) => {
  Htspositive.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all htspositives.",
      });
    else res.send({ message: `All Htspositive were deleted successfully!` });
  });
};

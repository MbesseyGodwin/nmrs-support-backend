const Drugrefill = require("../models/drugrefill.model.js");

// Create and Save a new Drugrefill
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Drugrefill
  const drugrefill = new Drugrefill({
    drugrefillData: req.body.drugrefillData,
    userId: req.body.userId,
    date: req.body.date,
  });

  // Save Drugrefill in the database
  Drugrefill.create(drugrefill, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Drugrefill.",
      });
    else res.send(data);
  });
};

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

// Find a single Drugrefill with a drugrefillId
exports.findOne = (req, res) => {
  Drugrefill.findById(req.params.drugrefillId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Drugrefill with id ${req.params.drugrefillId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Drugrefill with id " + req.params.drugrefillId,
        });
      }
    } else res.send(data);
  });
};

// Update a Drugrefill identified by the drugrefillId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Drugrefill.updateById(
    req.params.drugrefillId,
    new Drugrefill(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Drugrefill with id ${req.params.drugrefillId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating Drugrefill with id " + req.params.drugrefillId,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Drugrefill with the specified drugrefillId in the request
exports.delete = (req, res) => {
  Drugrefill.remove(req.params.drugrefillId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Drugrefill with id ${req.params.drugrefillId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Drugrefill with id " + req.params.drugrefillId,
        });
      }
    } else res.send({ message: `Drugrefill was deleted successfully!` });
  });
};

// Delete all Drugrefills from the database.
exports.deleteAll = (req, res) => {
  Drugrefill.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all drugrefills.",
      });
    else res.send({ message: `All Drugrefill were deleted successfully!` });
  });
};

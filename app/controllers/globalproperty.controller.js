const Globalproperty = require("../models/globalproperty.model.js");

// Create and Save a new Globalproperty
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Globalproperty
  const globalproperty = new Globalproperty({
    globalpropertyData: req.body.globalpropertyData,
    userId: req.body.userId,
    date: req.body.date,
  });

  // Save Globalproperty in the database
  Globalproperty.create(globalproperty, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Globalproperty.",
      });
    else res.send(data);
  });
};

// Retrieve all Globalproperties from the database.
exports.findAll = (req, res) => {
  Globalproperty.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving globalproperties.",
      });
    else res.send(data);
  });
};

// Find a single Globalproperty with a globalpropertyId
exports.findOne = (req, res) => {
  Globalproperty.findById(req.params.globalpropertyId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Globalproperty with id ${req.params.globalpropertyId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Globalproperty with id " + req.params.globalpropertyId,
        });
      }
    } else res.send(data);
  });
};

// Update a Globalproperty identified by the globalpropertyId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Globalproperty.updateById(
    req.params.globalpropertyId,
    new Globalproperty(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Globalproperty with id ${req.params.globalpropertyId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating Globalproperty with id " + req.params.globalpropertyId,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Globalproperty with the specified globalpropertyId in the request
exports.delete = (req, res) => {
  Globalproperty.remove(req.params.globalpropertyId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Globalproperty with id ${req.params.globalpropertyId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Globalproperty with id " + req.params.globalpropertyId,
        });
      }
    } else res.send({ message: `Globalproperty was deleted successfully!` });
  });
};

// Delete all Globalproperties from the database.
exports.deleteAll = (req, res) => {
  Globalproperty.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all globalproperties.",
      });
    else res.send({ message: `All Globalproperty were deleted successfully!` });
  });
};

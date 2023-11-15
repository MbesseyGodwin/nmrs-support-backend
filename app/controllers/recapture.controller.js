const recapture = require("../models/recapture.model.js");

// Create and Save a new recapture

// Retrieve all recaptures from the database.
exports.findAll = (req, res) => {
  recapture.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving recapture.",
      });
    else res.send(data);
  });
};

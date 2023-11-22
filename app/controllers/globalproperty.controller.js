<<<<<<< HEAD
const Globalproperty = require("../models/globalproperty.model.js");

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

=======
const Globalproperty = require("../models/globalproperty.model.js");

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

>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5

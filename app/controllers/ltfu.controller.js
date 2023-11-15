const ltfu = require("../models/ltfu.model.js");

// Create and Save a new ltfu

// Retrieve all ltfus from the database.
exports.findAll = (req, res) => {
  ltfu.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ltfu.",
      });
    else res.send(data);
  });
};

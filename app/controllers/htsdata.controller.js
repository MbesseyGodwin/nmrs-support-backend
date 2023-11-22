<<<<<<< HEAD
const Htsdata = require("../models/htsdata.model.js");

// Retrieve all Htsdata from the database.
exports.findAll = (req, res) => {
    Htsdata.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving htsdata.",
            });
        else res.send(data);
    });
=======
const Htsdata = require("../models/htsdata.model.js");

// Retrieve all Htsdata from the database.
exports.findAll = (req, res) => {
    Htsdata.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving htsdata.",
            });
        else res.send(data);
    });
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
};
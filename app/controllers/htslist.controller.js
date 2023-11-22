<<<<<<< HEAD
const Htslist = require("../models/htslist.model.js");

// Retrieve all Htslist from the database.
exports.findAll = (req, res) => {
    Htslist.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving htslist.",
            });
        else res.send(data);
    });
=======
const Htslist = require("../models/htslist.model.js");

// Retrieve all Htslist from the database.
exports.findAll = (req, res) => {
    Htslist.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving htslist.",
            });
        else res.send(data);
    });
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
};
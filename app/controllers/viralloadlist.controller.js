<<<<<<< HEAD
const Viralloadlist = require("../models/viralloadlist.model.js");

// Retrieve all viralloadlist from the database.
exports.findAll = (req, res) => {
    Viralloadlist.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving viralloadlist.",
            });
        else res.send(data);
    });
=======
const Viralloadlist = require("../models/viralloadlist.model.js");

// Retrieve all viralloadlist from the database.
exports.findAll = (req, res) => {
    Viralloadlist.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving viralloadlist.",
            });
        else res.send(data);
    });
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
};
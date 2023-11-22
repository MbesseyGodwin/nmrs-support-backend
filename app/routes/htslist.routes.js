<<<<<<< HEAD
module.exports = htslistRoute => {
    const htslist = require("../controllers/htslist.controller.js");

    // Retrieve all htslist
    htslistRoute.get("/htslist", htslist.findAll);
=======
module.exports = htslistRoute => {
    const htslist = require("../controllers/htslist.controller.js");

    // Retrieve all htslist
    htslistRoute.get("/htslist", htslist.findAll);
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
};
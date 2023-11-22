<<<<<<< HEAD
module.exports = htsdataRoute => {
    const htsdata = require("../controllers/htsdata.controller.js");

    // Retrieve all htsdata
    htsdataRoute.get("/htsdata", htsdata.findAll);
=======
module.exports = htsdataRoute => {
    const htsdata = require("../controllers/htsdata.controller.js");

    // Retrieve all htsdata
    htsdataRoute.get("/htsdata", htsdata.findAll);
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
};
<<<<<<< HEAD

module.exports = htsresultRoute => {
  const htsresult = require("../controllers/htsresult.controller.js");

  // Retrieve all htsresults
  htsresultRoute.get("/htsresults", htsresult.findAll);
=======

module.exports = htsresultRoute => {
  const htsresult = require("../controllers/htsresult.controller.js");

  // Retrieve all htsresults
  htsresultRoute.get("/htsresults", htsresult.findAll);
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
};
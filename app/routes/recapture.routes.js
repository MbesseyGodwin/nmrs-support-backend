module.exports = recaptureRoute => {
    const recapture = require("../controllers/recapture.controller.js");
  
    // Retrieve all recapture
    recaptureRoute.get("/recapture", recapture.findAll);

  };
  
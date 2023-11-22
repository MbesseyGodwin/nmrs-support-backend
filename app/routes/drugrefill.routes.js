<<<<<<< HEAD
module.exports = drugrefillRoute => {
    const drugrefills = require("../controllers/drugrefill.controller.js");
  
   
    // Retrieve all drugrefills
    drugrefillRoute.get("/drugrefill", drugrefills.findAll);

  };
=======
module.exports = drugrefillRoute => {
    const drugrefills = require("../controllers/drugrefill.controller.js");
  
   
    // Retrieve all drugrefills
    drugrefillRoute.get("/drugrefill", drugrefills.findAll);

  };
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
  
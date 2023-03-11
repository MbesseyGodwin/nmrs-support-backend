module.exports = drugrefillRoute => {
    const drugrefills = require("../controllers/drugrefill.controller.js");
  
    // Create a new Drugrefill
    drugrefillRoute.post("/drugrefill", drugrefills.create);
  
    // Retrieve all drugrefills
    drugrefillRoute.get("/drugrefill", drugrefills.findAll);
  
    // Retrieve a single Drugrefill with drugrefillId
    drugrefillRoute.get("/drugrefill/:drugrefillId", drugrefills.findOne);
  
    // Update a Drugrefill with drugrefillId
    drugrefillRoute.put("/drugrefill/:drugrefillId", drugrefills.update);
  
    // Delete a Drugrefill with drugrefillId
    drugrefillRoute.delete("/drugrefill/:drugrefillId", drugrefills.delete);
  
    // Delete all drugrefills
    drugrefillRoute.delete("/drugrefill", drugrefills.deleteAll);
  };
  
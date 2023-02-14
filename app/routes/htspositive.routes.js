
module.exports = htspositiveRoute => {
    const htspositives = require("../controllers/htspositive.controller.js");
  
    // Create a new htspositive
    htspositiveRoute.post("/htspositives", htspositives.create);
  
    // Retrieve all htspositives
    htspositiveRoute.get("/htspositives", htspositives.findAll);
  
    // Retrieve a single htspositive with htspositiveId
    htspositiveRoute.get("/htspositives/:htspositiveId", htspositives.findOne);
  
    // Update a htspositive with htspositiveId
    htspositiveRoute.put("/htspositives/:htspositiveId", htspositives.update);
  
    // Delete a htspositive with htspositiveId
    htspositiveRoute.delete("/htspositives/:htspositiveId", htspositives.delete);
  
    // Delete all htspositives
    htspositiveRoute.delete("/htspositives", htspositives.deleteAll);
  };
  
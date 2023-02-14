
module.exports = htsnegativeRoute => {
    const htsnegatives = require("../controllers/htsnegative.controller.js");
  
    // Create a new htsnegative
    htsnegativeRoute.post("/htsnegatives", htsnegatives.create);
  
    // Retrieve all htsnegatives
    htsnegativeRoute.get("/htsnegatives", htsnegatives.findAll);
  
    // Retrieve a single htsnegative with htsnegativeId
    htsnegativeRoute.get("/htsnegatives/:htsnegativeId", htsnegatives.findOne);
  
    // Update a htsnegative with htsnegativeId
    htsnegativeRoute.put("/htsnegatives/:htsnegativeId", htsnegatives.update);
  
    // Delete a htsnegative with htsnegativeId
    htsnegativeRoute.delete("/htsnegatives/:htsnegativeId", htsnegatives.delete);
  
    // Delete all htsnegatives
    htsnegativeRoute.delete("/htsnegatives", htsnegatives.deleteAll);
  };
  
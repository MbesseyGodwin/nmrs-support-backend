module.exports = globalpropertyRoute => {
    const globalproperties = require("../controllers/globalproperty.controller.js");
  
    // Create a new globalproperty
    globalpropertyRoute.post("/globalproperties", globalproperties.create);
  
    // Retrieve all globalproperties
    globalpropertyRoute.get("/globalproperties", globalproperties.findAll);
  
    // Retrieve a single globalproperty with globalpropertyId
    globalpropertyRoute.get("/globalproperties/:globalpropertyId", globalproperties.findOne);
  
    // Update a globalproperty with globalpropertyId
    globalpropertyRoute.put("/globalproperties/:globalpropertyId", globalproperties.update);
  
    // Delete a globalproperty with globalpropertyId
    globalpropertyRoute.delete("/globalproperties/:globalpropertyId", globalproperties.delete);
  
    // Delete all globalproperties
    globalpropertyRoute.delete("/globalproperties", globalproperties.deleteAll);
  };
  
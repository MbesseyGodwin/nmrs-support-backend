<<<<<<< HEAD
module.exports = globalpropertyRoute => {
  const globalproperties = require("../controllers/globalproperty.controller.js");

  // Retrieve all globalproperties
  globalpropertyRoute.get("/globalproperties", globalproperties.findAll);
};
=======
module.exports = globalpropertyRoute => {
  const globalproperties = require("../controllers/globalproperty.controller.js");

  // Retrieve all globalproperties
  globalpropertyRoute.get("/globalproperties", globalproperties.findAll);
};
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5

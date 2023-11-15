module.exports = ltfuRoute => {
    const ltfu = require("../controllers/ltfu.controller.js");
  
   
    // Retrieve all ltfu
    ltfuRoute.get("/ltfu", ltfu.findAll);

  };
  
<<<<<<< HEAD
module.exports = viralloadlistRoute => {
    const viralloadlist = require("../controllers/viralloadlist.controller.js");

    // Retrieve all viralloadlist
    viralloadlistRoute.get("/viralloadlist", viralloadlist.findAll);
=======
module.exports = viralloadlistRoute => {
    const viralloadlist = require("../controllers/viralloadlist.controller.js");

    // Retrieve all viralloadlist
    viralloadlistRoute.get("/viralloadlist", viralloadlist.findAll);
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
};
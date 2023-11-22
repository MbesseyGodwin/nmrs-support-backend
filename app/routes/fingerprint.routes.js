<<<<<<< HEAD
module.exports = fingerprintRoute => {
  const fingerprints = require("../controllers/fingerprint.controller.js");

  // Create a new fingerprint
  fingerprintRoute.post("/fingerprints", fingerprints.create);

  // Retrieve all fingerprints
  fingerprintRoute.get("/fingerprints", fingerprints.findAll);

  // Retrieve a single fingerprint with fingerprintId
  fingerprintRoute.get("/fingerprints/:fingerprintId", fingerprints.findOne);

  // Update a fingerprint with fingerprintId
  fingerprintRoute.put("/fingerprints/:fingerprintId", fingerprints.update);

  // Delete a fingerprint with fingerprintId
  fingerprintRoute.delete("/fingerprints/:fingerprintId", fingerprints.delete);

  // Delete all fingerprints
  fingerprintRoute.delete("/fingerprints", fingerprints.deleteAll);
};
=======
module.exports = fingerprintRoute => {
  const fingerprints = require("../controllers/fingerprint.controller.js");

  // Create a new fingerprint
  fingerprintRoute.post("/fingerprints", fingerprints.create);

  // Retrieve all fingerprints
  fingerprintRoute.get("/fingerprints", fingerprints.findAll);

  // Retrieve a single fingerprint with fingerprintId
  fingerprintRoute.get("/fingerprints/:fingerprintId", fingerprints.findOne);

  // Update a fingerprint with fingerprintId
  fingerprintRoute.put("/fingerprints/:fingerprintId", fingerprints.update);

  // Delete a fingerprint with fingerprintId
  fingerprintRoute.delete("/fingerprints/:fingerprintId", fingerprints.delete);

  // Delete all fingerprints
  fingerprintRoute.delete("/fingerprints", fingerprints.deleteAll);
};
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5

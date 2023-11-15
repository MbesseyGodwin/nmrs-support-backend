const sql = require("./db.js");

const recapture = function (recapture) {
  this.id = recapture.id;
  this.template = recapture.template;
  this.date_created = recapture.date_created;
  this.patient_id = recapture.patient_id;
};

const recapture_query = `SELECT patient_Id, MAX(date_created) AS date_created, MAX(encoded_template) AS encoded_template, MAX(hashed) AS hashed, MAX(recapture_count) AS recapture_count FROM biometricverificationinfo GROUP BY patient_Id`

recapture.getAll = (result) => {
  sql.query(recapture_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = recapture;
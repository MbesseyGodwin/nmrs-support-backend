<<<<<<< HEAD
const sql = require("./db.js");

const Globalproperty = function (globalproperty) {
  this.id = globalproperty.id;
  this.template = globalproperty.template;
  this.date_created = globalproperty.date_created;
  this.patient_id = globalproperty.patient_id;
};


const globalProperties = "SELECT property, property_value FROM global_property WHERE property = 'ndr_last_run_date' OR property = 'last_local_data_sync_date' OR property = 'Facility_Name' OR property = 'facility_datim_code' OR property = 'state'";
Globalproperty.getAll = (result) => {
  sql.query(globalProperties, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("globalproperties: ", res);
    result(null, res);
  });
};




=======
const sql = require("./db.js");

const Globalproperty = function (globalproperty) {
  this.id = globalproperty.id;
  this.template = globalproperty.template;
  this.date_created = globalproperty.date_created;
  this.patient_id = globalproperty.patient_id;
};


const globalProperties = "SELECT property, property_value FROM global_property WHERE property = 'ndr_last_run_date' OR property = 'last_local_data_sync_date' OR property = 'Facility_Name' OR property = 'facility_datim_code'";
Globalproperty.getAll = (result) => {
  sql.query(globalProperties, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("globalproperties: ", res);
    result(null, res);
  });
};




>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
module.exports = Globalproperty;
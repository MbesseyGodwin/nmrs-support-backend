const sql = require("./db.js");

const Globalproperty = function (globalproperty) {
  this.id = globalproperty.id;
  this.template = globalproperty.template;
  this.date_created = globalproperty.date_created;
  this.patient_id = globalproperty.patient_id;
};

Globalproperty.create = (newGlobalproperty, result) => {
  sql.query("INSERT INTO globalproperties SET ?", newGlobalproperty, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created globalproperty: ", {
      id: res.insertId,
      ...newGlobalproperty,
    });
    result(null, { id: res.insertId, ...newGlobalproperty });
  });
};

Globalproperty.findById = (globalpropertyId, result) => {
  sql.query(
    `SELECT * FROM globalproperties WHERE id = ${globalpropertyId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found globalproperty: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found globalproperty with the id
      result({ kind: "not_found" }, null);
    }
  );
};
const globalProperties = "SELECT property, property_value, description FROM openmrs.global_property";
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

Globalproperty.updateById = (id, globalproperty, result) => {
  sql.query(
    "UPDATE globalproperties SET template = ?, date_created = ?, patient_id = ? WHERE id = ?",
    [
      globalproperty.template,
      globalproperty.date_created,
      globalproperty.patient_id,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found globalproperty with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated globalproperty: ", { id: id, ...globalproperty });
      result(null, { id: id, ...globalproperty });
    }
  );
};

Globalproperty.remove = (id, result) => {
  sql.query("DELETE FROM globalproperties WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found globalproperty with the id
      result(
        {
          kind: "not_found",
        },
        null
      );
      return;
    }

    console.log("deleted globalproperty with id: ", id);
    result(null, res);
  });
};

Globalproperty.removeAll = (result) => {
  sql.query("DELETE FROM globalproperty", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} globalproperty`);
    result(null, res);
  });
};

module.exports = Globalproperty;
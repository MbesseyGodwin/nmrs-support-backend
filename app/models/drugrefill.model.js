const sql = require("./db.js");

const Drugrefill = function (drugrefill) {
  this.id = drugrefill.id;
  this.template = drugrefill.template;
  this.date_created = drugrefill.date_created;
  this.patient_id = drugrefill.patient_id;
};

Drugrefill.create = (newDrugrefill, result) => {
  sql.query("INSERT INTO drugrefills SET ?", newDrugrefill, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created drugrefill: ", {
      id: res.insertId,
      ...newDrugrefill,
    });
    result(null, { id: res.insertId, ...newDrugrefill });
  });
};

Drugrefill.findById = (drugrefillId, result) => {
  sql.query(
    `SELECT * FROM drugrefills WHERE id = ${drugrefillId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found drugrefill: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found drugrefill with the id
      result({ kind: "not_found" }, null);
    }
  );
};
const drugrefill = "SELECT * FROM obs where concept_id = 5096 and value_datetime = CURDATE()";
Drugrefill.getAll = (result) => {
  sql.query(drugrefill, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("drugrefills: ", res);
    result(null, res);
  });
};

Drugrefill.updateById = (id, drugrefill, result) => {
  sql.query(
    "UPDATE drugrefills SET template = ?, date_created = ?, patient_id = ? WHERE id = ?",
    [
      drugrefill.template,
      drugrefill.date_created,
      drugrefill.patient_id,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found drugrefill with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated drugrefill: ", { id: id, ...drugrefill });
      result(null, { id: id, ...drugrefill });
    }
  );
};

Drugrefill.remove = (id, result) => {
  sql.query("DELETE FROM drugrefills WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found drugrefill with the id
      result(
        {
          kind: "not_found",
        },
        null
      );
      return;
    }

    console.log("deleted drugrefill with id: ", id);
    result(null, res);
  });
};

Drugrefill.removeAll = (result) => {
  sql.query("DELETE FROM drugrefill", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} drugrefill`);
    result(null, res);
  });
};

module.exports = Drugrefill;
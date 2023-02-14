const sql = require("./db.js");

const Htsnegative = function (htsnegative) {
  this.id = htsnegative.id;
  this.template = htsnegative.template;
  this.date_created = htsnegative.date_created;
  this.patient_id = htsnegative.patient_id;
};

Htsnegative.create = (newHtsnegative, result) => {
  sql.query("INSERT INTO htsnegatives SET ?", newHtsnegative, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created htsnegative: ", {
      id: res.insertId,
      ...newHtsnegative,
    });
    result(null, { id: res.insertId, ...newHtsnegative });
  });
};

Htsnegative.findById = (htsnegativeId, result) => {
  sql.query(
    `SELECT * FROM htsnegatives WHERE id = ${htsnegativeId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found htsnegative: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found htsnegative with the id
      result({ kind: "not_found" }, null);
    }
  );
};

htsnegative = "SELECT (SELECT COUNT(DISTINCT person_id) FROM openmrs.obs WHERE obs.concept_id = 165843 and  obs.`value_coded` = 664 and voided = 0) AS 'TOTAL_HST_NEG'";
Htsnegative.getAll = (result) => {
  sql.query(htsnegative, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("htsnegatives: ", res);
    result(null, res);
  });
};

Htsnegative.updateById = (id, htsnegative, result) => {
  sql.query(
    "UPDATE htsnegatives SET template = ?, date_created = ?, patient_id = ? WHERE id = ?",
    [
      htsnegative.template,
      htsnegative.date_created,
      htsnegative.patient_id,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found htsnegative with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated htsnegative: ", { id: id, ...htsnegative });
      result(null, { id: id, ...htsnegative });
    }
  );
};

Htsnegative.remove = (id, result) => {
  sql.query("DELETE FROM htsnegatives WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found htsnegative with the id
      result(
        {
          kind: "not_found",
        },
        null
      );
      return;
    }

    console.log("deleted htsnegative with id: ", id);
    result(null, res);
  });
};

Htsnegative.removeAll = (result) => {
  sql.query("DELETE FROM htsnegative", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} htsnegative`);
    result(null, res);
  });
};

module.exports = Htsnegative;
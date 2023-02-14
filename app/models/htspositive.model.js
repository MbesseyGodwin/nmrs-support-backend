const sql = require("./db.js");

const Htspositive = function (htspositive) {
  this.id = htspositive.id;
  this.template = htspositive.template;
  this.date_created = htspositive.date_created;
  this.patient_id = htspositive.patient_id;
};

Htspositive.create = (newHtspositive, result) => {
  sql.query("INSERT INTO htspositives SET ?", newHtspositive, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created htspositive: ", {
      id: res.insertId,
      ...newHtspositive,
    });
    result(null, { id: res.insertId, ...newHtspositive });
  });
};

Htspositive.findById = (htspositiveId, result) => {
  sql.query(
    `SELECT * FROM htspositives WHERE id = ${htspositiveId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found htspositive: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found htspositive with the id
      result({ kind: "not_found" }, null);
    }
  );
};

htspositive = "SELECT (SELECT COUNT(DISTINCT person_id) FROM openmrs.obs WHERE obs.concept_id = 165843 and  obs.`value_coded` = 703 and voided = 0) AS 'TOTAL_HST_POS'";
Htspositive.getAll = (result) => {
  sql.query(htspositive, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("htspositives: ", res);
    result(null, res);
  });
};

Htspositive.updateById = (id, htspositive, result) => {
  sql.query(
    "UPDATE htspositives SET template = ?, date_created = ?, patient_id = ? WHERE id = ?",
    [
      htspositive.template,
      htspositive.date_created,
      htspositive.patient_id,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found htspositive with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated htspositive: ", { id: id, ...htspositive });
      result(null, { id: id, ...htspositive });
    }
  );
};

Htspositive.remove = (id, result) => {
  sql.query("DELETE FROM htspositives WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found htspositive with the id
      result(
        {
          kind: "not_found",
        },
        null
      );
      return;
    }

    console.log("deleted htspositive with id: ", id);
    result(null, res);
  });
};

Htspositive.removeAll = (result) => {
  sql.query("DELETE FROM htspositive", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} htspositive`);
    result(null, res);
  });
};

module.exports = Htspositive;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// home route
app.get("/", (req, res) => {
  res.json({
    message: `API Routes`,
    link1: "/fingerprints",
    link2: "/globalproperties",
    link3: "/viralloads",
    link4: "/htsresults",
    link5: "/htsdata",
    link6: "/drugrefill",
    link7: "/htslist",
    link8: "/viralloadlist",
  });
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// routes
require("./app/routes/customer.routes.js")(app);
require("./app/routes/fingerprint.routes.js")(app);
require("./app/routes/globalproperty.routes.js")(app);
require("./app/routes/htsresult.routes.js")(app);
require("./app/routes/htsdata.routes.js")(app);
require("./app/routes/drugrefill.routes.js")(app);
require("./app/routes/htslist.routes.js")(app);
require("./app/routes/viralloadlist.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

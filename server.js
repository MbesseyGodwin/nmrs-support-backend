const express = require("express");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Import the MongoDB URI from a separate file
const mongoURI = require('./app/config/config.js').mongoURI;

// Middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());

// Set up the MongoDB connection and collection
let reportsCollection;
let client; // Define client globally

async function connectToDatabase() {
    try {
        client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db('nmrs-support');
        reportsCollection = db.collection('reports');
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

// Define CORS headers
app.use((req, res, next) => {
=======
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
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

<<<<<<< HEAD
// API Routes
app.get("/", (req, res) => {
  res.json({
    message: `API Routes`,
    links: [
      "/fingerprints",
      "/recapture",
      "/globalproperties",
      "/viralloads",
      "/htsresults",
      "/htsdata",
      "/drugrefill",
      "/htslist",
      "/viralloadlist",
      "/ltfu",
      "/api/reports"
    ]
  });
});

// Import and use API routes
const apiRoutes = [
  "fingerprint",
  "recapture",
  "globalproperty",
  "htsresult",
  "htsdata",
  "drugrefill",
  "htslist",
  "viralloadlist",
  "ltfu"
];

apiRoutes.forEach(route => {
  require(`./app/routes/${route}.routes.js`)(app);
});

// POST route for reports
app.post('/api/reports', async (req, res) => {
    try {
        if (!reportsCollection) {
            return res.status(500).json({ message: 'Database connection not ready' });
        }

        const newData = req.body;

        // Add a timestamp field with the current date and time
        newData.timestamp = new Date();

        const filter = { name: newData.name };
        const update = { $set: newData };

        const result = await reportsCollection.updateOne(filter, update, { upsert: true });

        if (result.matchedCount > 0 || result.upsertedCount > 0) {
            console.log("Data updated successfully in the online database");
            res.status(201).json({ message: 'Data updated successfully' });
        } else {
            console.log("No matching document found. Inserting as new data.");
            await reportsCollection.insertOne(newData);
            res.status(201).json({ message: 'New data inserted successfully' });
        }
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// GET route for reports
app.get('/api/reports', async (req, res) => {
    try {
        if (!reportsCollection) {
            return res.status(500).json({ message: 'Database connection not ready' });
        }

        const reports = await reportsCollection.find({}).toArray();
        
        res.status(200).json(reports);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
async function startServer() {
    await connectToDatabase();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();
=======
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
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5

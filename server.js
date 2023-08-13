const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const mongoURI = 'mongodb+srv://nigerianprogramer:Abuja2Mars@cluster0.5txx9he.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());

// Set up the MongoDB connection and collection
let reportsCollection;

async function connectToDatabase() {
    try {
        await client.connect();
        const db = client.db('nmrs-support');
        reportsCollection = db.collection('reports');
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

connectToDatabase();

// Define CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Define API routes
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
    link9: "/api/reports",
  });
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


app.post('/api/reports', async (req, res) => {
    try {
        if (!reportsCollection) {
            return res.status(500).json({ message: 'Database connection not ready' });
        }

        const newData = req.body;

        // Update the document with a matching name (or ID)
        const filter = { name: newData.name }; // You can use any unique identifier here
        const update = { $set: newData };

        const result = await reportsCollection.updateOne(filter, update, { upsert: true });

        if (result.matchedCount > 0 || result.upsertedCount > 0) {
            console.log("Data updated successfully in the online Database");
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

// Listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

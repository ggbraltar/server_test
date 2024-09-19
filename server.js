const express = require("express")
const cors = require("cors")
const https = require("https");
const fs = require("fs");

const app = express();

// Optional: Use CORS if needed
app.use(cors());

// Load SSL certificate and key
const options = {
    key: fs.readFileSync("certificate.key"),
    cert: fs.readFileSync("certificate.crt"),
  };
  
const sampleData = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Joe"}
];

app.get("/api/people", (req, res) => {
    console.log("request received");
    res.json(sampleData);
});

//app.listen(80); // port 443 https, 80 http
https.createServer(options, app).listen(443, () => {
    console.log("Server is running on https://localhost:443");
  });
//app.use(express.static("dist"));


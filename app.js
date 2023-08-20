const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const staticPath = path.join(__dirname , "../DIGITAL MARKETING WEBSITE");
app.use(express.static(staticPath));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/about", (req,res) => {
    res.sendFile(__dirname + "/about.html");
})

app.get("/services", (req,res) => {
    res.sendFile(__dirname + "/our-services.html");
})

app.get("/contact", (req,res) => {
    res.sendFile(__dirname + "/contact-us.html");
})


app.listen(3000, () => {
    console.log("Server is running on port 3000.");
})

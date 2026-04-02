var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// Temporary user storage
let users = [];

// ================= ROUTES =================

// Home
app.get("/", function (req, res) {
    res.render("index");
});

// Login page
app.get("/login", function (req, res) {
    res.render("login");
});

// Signup page
app.get("/signup", function (req, res) {
    res.render("signup");
});

// // Crime page
// app.get("/crime", function (req, res) {
//     res.render("crime");
// });

// ================= AUTH =================

// Signup
app.post("/signup", function (req, res) {
    const { username, password } = req.body;

    users.push({ username, password });
    console.log("Users:", users);

    res.redirect("/login");
});

// Login
app.post("/login", function (req, res) {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.redirect("/maps");
    } else {
        res.send("Invalid Username or Password ❌");
    }
});

// ================= MAP ROUTE =================

// ✅ MOST IMPORTANT 
app.get("/maps", function (req, res) {
    res.redirect("/MapAndLoc.html");
});

// ================= SERVER =================

app.listen(3000, function () {
    console.log("Server Running....");
});
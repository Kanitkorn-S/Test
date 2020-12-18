const express = require("express");
const path = require("path");
const mysql = require("mysql");

const config = require("./dbConfig");

const app = express();
const con = mysql.createConnection(config);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/login", function (req,res) {
    const username = req.body.username;
    const password = req.body.password;

    // console.log(username,password);
    // res.end();

    const sql ="SELECT username, role FROM user WHERE username=? AND password=?"
    con.query(sql,[username, password], function)

  });


app.listen(3000, function(){
    console.log("Server is starting at 3000")
});
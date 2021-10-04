const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require("cors");
const fs = require('fs');
const path = require('path');

// Mock
const dados = {
    name: "Thiago",
    lastName: "Arribamar",
    age: "22"
}

app.use(cors('*'))

//routes 
app.get("/", function (req, res) {
    res.send(dados)
})

app.post("/cadastro", function (req, res) {
    res.send(dados)
})



//start server 
app.listen(3000, function (req, res) {
    console.log('Servidor está rodando')
});

import express from 'express';
//const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send("Home page");
})

app.listen(port, () =>console.log(`Server running at http://localhost:${port}`));


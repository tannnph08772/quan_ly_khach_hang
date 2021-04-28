const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;
const path = require('path');
const db = require('./database/connection')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
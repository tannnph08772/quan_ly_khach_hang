const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./src/api/routes/index.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.static(path.join(__dirname)));
router(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
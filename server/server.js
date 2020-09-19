const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/route')
const cors = require('cors')
const session = require('express-session')
require('dotenv').config()
var route = express.Router();


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/', router);

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to World of Program" });
});

app.use(session({
    secret: 'welcome',
    resave: true,
    saveUninitialized: true
}))

// listen for requests
app.listen(3000 || 5000, () => {
    console.log('Server is listening on port 3000')
})

app.use(bodyParser.urlencoded({ extended: true }));





module.exports = app

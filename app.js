const express = require('express');
const dotenv = require('dotenv');
var os = require("os");
dotenv.config();
const app = express();

const PORT = process.env.LISTEN_PORT || 5000


app.get('/', (req, res) => {
    res.send(os.hostname());
    console.log('Get request on : ' + os.hostname());
});


app.listen(PORT, ()=>{
    console.log('Server started on port ' + PORT);
});
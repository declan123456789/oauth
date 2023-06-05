const express = require('express');
const app = express();

app.use('/oauth', (req, res) => {
    var username = req.params.username;
    
    res.send(username);
});

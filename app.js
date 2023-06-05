const express = require('express');
const app = express();

app.get('/oauth', (req, res) => {
    var username = req.params.username;
    
    res.send(username);
});

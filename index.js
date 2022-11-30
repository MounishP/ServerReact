const express = require('express');
const res = require('express/lib/response');

const app = express();

app.get('/greeting',(req,res) => {
    res.send({hi:'there'});
});

const PORT = process.env.PORT || 5000
app.listen(PORT);
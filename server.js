const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const fs = require('fs')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', function(req, res) {
    var obj = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8'));
    res.json(obj);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
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

app.post('/api/notes', function(req, res) {
    var title = req.body.title,
        note = req.body.note;
    // ...
    var obj = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8'));
    var myJsonArrayObject = JSON.stringify([objectString]);

    //add a new element to the array: parse the JSON, push the new element and stringify again:
    JSON.stringify(JSON.parse(myJsonArrayObject).push({ "test": "testval", "title": "testtitle" }));
});

app.get('/api/notes', function(req, res) {
    var obj = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8'));
    res.json(obj);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
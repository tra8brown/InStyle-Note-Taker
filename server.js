const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');
const fs = require('fs')

app.use(express.static("public"))


app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.post('/api/notes', function(req, res) {

    // ...
    var obj = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));


    console.log(req.body, obj)
    obj.push(req.body)
        //add a new element to the array: parse the JSON, push the new element and stringify again:
    fs.writeFileSync("./db/db.json", JSON.stringify(obj));
    res.json(obj)
});

app.get('/api/notes', function(req, res) {
    var obj = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(obj);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
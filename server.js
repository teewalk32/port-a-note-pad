const express = require('express');
const path = require('path')
// const fs = require("fs");

// calling express to work
const app = express();

// where local host port channel was picked
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

// route for the server to the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/Index.html'))
});

// route for the notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});


// express server on port 3001
app.listen(PORT, () =>
    console.log(`Express Server on port ${PORT} !`)

);

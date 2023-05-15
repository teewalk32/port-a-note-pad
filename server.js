const express = require('express');
const path = require('path');
// const { clog } = require('./middleware/clog');
const api = require('./routes/Index.js');
const fs = require('fs');


// where local host port channel was picked
const PORT = process.env.PORT || 3001;


// calling express to work
const app = express();

// app.use(clog);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('./public'));

//  get route for the server to the index.html homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/Index.html'))
});

// get route for the notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});



app.listen(PORT, () =>
    console.log(`Express Server on port ${PORT} !`)

);

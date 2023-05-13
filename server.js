const express = require('express');
const path = require('path')
// const html = require('./routes/html.js');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/', html);

// app.use(express.static('public'));

// Endpoint to return our own locally stored data
// app.get('/api', (req, res) => res.json(pulls));
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, './public/Index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
    });
app.listen(PORT, () => console.log(`Express Server on port ${PORT} !`));

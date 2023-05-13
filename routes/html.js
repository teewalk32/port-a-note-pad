const router = require('express').Router();
const path = require('path');
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Index.html'))
    });
router.get('./notes', (req, res) => {
    console.log("notes")
  });

  module.exports = router;
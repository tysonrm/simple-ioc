'use strict ';

const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', function (req, res) {
  res.send(
    fs.readFileSync('./public/index.html', 'utf8'),
  );
});

module.exports = router;

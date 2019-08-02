const express = require('express');
const router = express.Router();

//create a route
router.get('/', (req, res) => res.render('welcome'))

module.exports = router;
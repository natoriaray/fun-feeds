const express = require('express');
const router = express.Router();

//create a route
router.get('/', (req, res) => res.send('Welcome'))

module.exports = router;
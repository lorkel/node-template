const express = require('express')
const router = express.Router()

router.post('*', (req, res) => {
  res.send('api v1 path catchall');
});

router.get('*', (req, res) => {
  res.send('api v1 path catchall');
});

module.exports = router;

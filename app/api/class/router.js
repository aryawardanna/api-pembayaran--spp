const express = require('express');
const router = express.Router();

router.get('/class', function (req, res) {
  res.status(200).json({
    message: 'Router class',
  });
});

module.exports = router;

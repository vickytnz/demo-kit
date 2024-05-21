const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.post('/cookie-router', (req, res) => {
  // var return = res.locals.prevURL;
  res.redirect(res.locals.prevURL);
})

module.exports = router

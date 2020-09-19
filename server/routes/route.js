const express = require('express')
const router = express.Router();
const cntuser = require('../controller/controller')

router.post('/OepnGraphParameter', cntuser.OepnGraphParameter)


module.exports = router;

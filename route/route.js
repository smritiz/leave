
const express = require('express');

const leaveContoller = require('../controllers/leave.contoller');

module.exports = (function () {
    var router = express.Router();
  
    router.get('/leaves', leaveContoller.getLeaves);
  
    return router;
  
  })();
module.exports = function(app) {
  var express = require('express');
  var billRouter = express.Router();
  billRouter.get('/', function(req, res) {
    res.send({"bill":[]});
  });
  app.use('/api/bill', billRouter);
};

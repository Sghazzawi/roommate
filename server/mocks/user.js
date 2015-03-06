module.exports = function(app) {
  var express = require('express');
  var userRouter = express.Router();
  userRouter.get('/', function(req, res) {
    res.send({"user":[]});
  });
  app.use('/api/user', userRouter);
};

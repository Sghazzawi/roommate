module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();
  var userArray = [ 
      {id: 5, loginName: 'sharif.ghazzawi@gmail.com', password: 'kittens', displayName: 'sharif'},
      {id: 6, loginName: 'ahmad.ghazzawi@gmail.com', password: 'kittens', displayName: 'ahmad'},
      {id: 7, loginName: 'jasmine.ghazzawi@gmail.com', password: 'kittens', displayName: 'jasmine'},
    ];
  usersRouter.get('/', function(req, res) {
    res.send({"users": userArray});
  });

  usersRouter.get('/:id', function(req, res) {
    var id = parseInt(req.param('id'));
    var foundRecord = null;
      userArray.forEach(function(user) {
        if (user.id === id) {
          foundRecord = user;
        }
      });
      if (foundRecord === null) {
        res.send(404);
      } else {
        res.send({user: foundRecord});
      }
  });
  app.use('/api/users', usersRouter);
};

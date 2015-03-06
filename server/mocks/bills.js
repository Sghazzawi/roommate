module.exports = function(app) {
  var express = require('express');
  var billsRouter = express.Router();
  var id = 200;
  var billArray =[ 
    {id: 1, total: 200, description: 'phone', assignedTo: 7},
    {id: 2, total: 245, description: 'electric', assignedTo: 7},
    {id: 3, total: 175, description: 'cable', assignedTo: 7},
    {id: 4, total: 60, description: 'water', split: [99,100], assignedTo: 7},
    {id: 99, total: 60, description: 'x', parentBill: 4, assignedTo: 5},
    {id: 100, total: 60, description: 'y', parentBill: 4, assignedTo: 6}
  ];
  billsRouter.get('/', function(req, res) {
    if (!req.query.assignedTo) {
      res.send({"bills": billArray});
    } else {
      res.send({"bills": billArray.filter(function(bill) { return bill.assignedTo === parseInt(req.query.assignedTo);})});
    }
  });
  billsRouter.post('/', function(req, res) {
    var x = {};
    for (z in req.body.bill) {
      x[z] = req.body.bill[z];
    }
    x.id = id++;
    res.send ({bill:x});
  });
  app.use('/api/bills', billsRouter);
};

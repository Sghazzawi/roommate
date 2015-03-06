import DS from 'ember-data';

var Bill = DS.Model.extend({
  total: DS.attr('number'),
  description: DS.attr('string'),
  due: DS.attr('date'),
  createdBy: DS.belongsTo('user'),
  assignedTo: DS.belongsTo('user'),
  split: DS.hasMany('bill',{async: true}),
  //parentBill: DS.belongsTo('bill', {inverse:'split'})
});

Bill.reopenClass({
  FIXTURES: [
    {id: 1, total: 200, description: 'phone'},
    {id: 2, total: 245, description: 'electric'},
    {id: 3, total: 175, description: 'cable'},
    {id: 4, total: 60, description: 'water', split: [99,100]},
    {id: 99, total: 60, description: 'x', parentBill: 4},
    {id: 100, total: 60, description: 'y', parentBill: 4}
  ]
});

export default Bill;

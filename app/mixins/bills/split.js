import Ember from 'ember';

export default Ember.Mixin.create({
  splitArray: Ember.ArrayProxy.create(),
  
  splitTotal: function() {
    return this.get('splitArray')
               .map(function(bill) {
                 return bill.get('total');
               })
               .reduce(function(a,b) {
                 return a + b;
               });
  }.property('splitArray')
});

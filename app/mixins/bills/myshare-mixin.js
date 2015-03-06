import Ember from 'ember';

export default Ember.Mixin.create({
  myShare: function() {
    if (this.get('split.length')) {
      var myShare = this.get('model.total');
      this.get('split').forEach(function(subBill){
        myShare -= subBill.get('total');
      });
      return myShare;
    } else {
      return this.get('model.total');
    }
  }.property('split.@each.total','model.total'),
});

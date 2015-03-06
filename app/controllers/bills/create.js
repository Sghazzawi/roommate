import Ember from 'ember';
import MyshareMixin from'roommate/mixins/bills/myshare-mixin';

export default Ember.ObjectController.extend(MyshareMixin, {
  needs: ['users','bills'],
  splitSelectedUserId: null,
  splitSelectedAmount: 0,
  selectedDate: null,
  roomMates: function() {
    return this.get('controllers.users.roomMates');
  }.property('controllers.users.roomMates'),

  showSplit: false,

  disableSplit: function() {
    return !this.get('split.length') && !this.get('total');
  }.property('split.@each','total'),

  actions: {
    saveBill: function () {
      var self = this;
      var bill = this.get('model');
      Ember.RSVP.all(bill.get('split').map(function(subBill){
        return subBill.save();
      })).then(function(){
        return bill.save();
      }).then(function(bill) {
        return self.get('controllers.bills.content').pushObject(bill);
      }).then(function() {
        self.transitionToRoute('bills');
      });
    },

   cancelBill: function() {
      var self = this;
        self.transitionToRoute('bills');
    },

    toggleShowSplit: function() {
      this.toggleProperty('showSplit');
    },

    addSplit: function() {
      var self = this,
          split = this.store.createRecord('bill',{
            total: this.get('splitSelectedAmount'),
            createdBy: this.get('controllers.users.currentUser'),
            description: this.get('description'),
            due: this.get('selectedDate'),
          });
      this.store.find('user',this.get('splitSelectedUserId')).then(function(user) {
        split.set('assignedTo',user);
        return self.get('model.split');
      }).then(function(splitArray) {
        return splitArray.pushObject(split);
      });
    }
  }
});

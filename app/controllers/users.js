import Ember from 'ember';

export default Ember.ArrayController.extend({

  roomMates: function() {
    var self = this;
    return this.get('content').filter(function (user) {
      return user.id !== self.get('currentUser.id');
    });
   }.property('content')
});

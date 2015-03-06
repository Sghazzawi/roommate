import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var currentUser = this.controllerFor('users').get('currentUser');
    return this.store.find('bill', {assignedTo: currentUser.get('id')});
  }
});

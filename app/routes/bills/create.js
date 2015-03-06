import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('bill',{assignedTo: this.controllerFor('users').get('currentUser'),
                                          createdBy: this.controllerFor('users').get('currentUser')
                                         });
  }
});

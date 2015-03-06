import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var self = this;
    return this.store.find('user')
      .then(function (users) {
        self.controllerFor('users').set('content', users);
        return self.store.find('user',{currentUser: true});
      },
      redirectBackToLogin.bind(self))
      .then(function (users){
        if (users && users.get('length')) { 
          self.controllerFor('users').set('currentUser',users.content[0]);
        }
      },
      redirectBackToLogin.bind(self));
  }
});

var redirectBackToLogin = function(error) {
  console.dir(error);
  if (error.status === 401) {
    this.transitionTo('logins');
  }
};

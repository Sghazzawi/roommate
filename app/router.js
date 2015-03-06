import Ember from 'ember';

var Router = Ember.Router.extend({
//  location: RoommateENV.locationType
});

Router.map(function() {
  this.resource('bills', function() {
    this.route('create');
    this.route('edit', {path: '/:id'});
  });
  this.resource('users', function() { });
  this.route('application');
  this.resource('login', { path: 'logins/:login_id' });
  this.resource('logins', function() { });
});

export default Router;

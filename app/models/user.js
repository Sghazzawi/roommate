import DS from 'ember-data';

var User = DS.Model.extend({
   displayName: DS.attr('string'),
   firstName: DS.attr('string'),
   lastName: DS.attr('string'),
   emails: DS.attr('array')  
});

export default User;

import DS from 'ember-data';
/*global Ember */
export default DS.Transform.extend({
  deserialize: function(serialized) {
    return !serialized ? Ember.A() : Ember.A(serialized);
  },

  serialize: function(deserialized) {
    return !deserialized ? [] : deserialized;
  }
});

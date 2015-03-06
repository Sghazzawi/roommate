import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:bills/create', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['controller:users', 'controller:bills' ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});

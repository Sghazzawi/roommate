import Ember from 'ember';
import BillsSplitMixin from '../../../../mixins/bills/split';
import { module, test } from 'qunit';

module('BillsSplitMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var BillsSplitObject = Ember.Object.extend(BillsSplitMixin);
  var subject = BillsSplitObject.create();
  assert.ok(subject);
});

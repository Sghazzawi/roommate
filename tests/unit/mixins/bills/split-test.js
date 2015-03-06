import Ember from 'ember';
import BillsSplitMixin from 'roommate/mixins/bills/split';

module('BillsSplitMixin');

// Replace this with your real tests.
test('it works', function() {
  var BillsSplitObject = Ember.Object.extend(BillsSplitMixin);
  var subject = BillsSplitObject.create();
  ok(subject);
});

import Ember from 'ember';
import BillsMyshareMixinMixin from '../../../../mixins/bills/myshare-mixin';
import { module, test } from 'qunit';

module('BillsMyshareMixinMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var BillsMyshareMixinObject = Ember.Object.extend(BillsMyshareMixinMixin);
  var subject = BillsMyshareMixinObject.create();
  assert.ok(subject);
});

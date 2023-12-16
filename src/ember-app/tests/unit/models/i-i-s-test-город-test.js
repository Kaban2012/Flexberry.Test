import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-город', 'Unit | Model | i-i-s-test-город', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test-new-class2',
    'model:i-i-s-test-город',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

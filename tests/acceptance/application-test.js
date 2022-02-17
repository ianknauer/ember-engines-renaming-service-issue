import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentURL } from '@ember/test-helpers';

module('basic acceptance test', function (hooks) {
  setupApplicationTest(hooks);

  test('the user can visit home page', async function (assert) {
    await visit('/analytics');
    assert.strictEqual(currentURL(), '/analytics');
    assert.dom('[data-test-id="injected from service"]').hasAnyText();
  });
});

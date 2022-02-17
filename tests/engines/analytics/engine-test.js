import { module, test } from 'qunit';
import { render } from '@ember/test-helpers';
import { setupEngineRenderingTest } from 'engine-testing/tests/helpers/engine';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';
import hbs from 'htmlbars-inline-precompile';

const resolver = engineResolverFor('analytics');

module('Acceptance | application', function (hooks) {
  setupEngineRenderingTest(hooks, { resolver });

  hooks.beforeEach(async function () {
    this.correctlyNamedAuth = this.owner.lookup('service:newAuth');
    this.oldAuthName = this.owner.lookup('service:auth');
  });

  test('visiting engine', async function (assert) {
    await render(
      hbs`
        <p>Correct Service Name: <span data-test-id="new mapping">{{this.correctlyNamedAuth.testingProperty}}</span></p>
        <p>Old Service Name: <span data-test-id="old mapping">{{this.oldAuthName.testingProperty}}</span></p>
      `
    );
    assert.dom('[data-test-id="new mapping"]').hasAnyText();
    assert.dom('[data-test-id="old mapping"]').hasNoText();
  });
});

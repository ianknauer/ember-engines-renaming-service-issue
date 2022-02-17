import { module, test } from 'qunit';
import { pauseTest, render } from '@ember/test-helpers';
import { setupEngineRenderingTest } from 'engine-testing/tests/helpers/engine';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';
import hbs from 'htmlbars-inline-precompile';

const resolver = engineResolverFor('analytics');

module('Acceptance | application', function (hooks) {
  setupEngineRenderingTest(hooks, { resolver });

  hooks.beforeEach(async function () {
    this.auth = this.owner.lookup('service:auth');
  });

  test('visiting engine', async function (assert) {
    await render(hbs`<p>{{this.auth.testingProperty}}</p>`);
    await pauseTest();
  });
});

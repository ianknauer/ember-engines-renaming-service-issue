/* eslint-disable func-style */
import { getApplication, settled } from '@ember/test-helpers';
import {
  setupRenderingTest as _setupRenderingTest,
  setupTest as _setupTest,
} from 'ember-qunit';
import Component from '@ember/component';

import { set } from '@ember/object';

const _setupStoreService = function (app) {
  // Store/Engine  Code
  this.owner.__registry__.fallback.fallback = app.__registry__;
  const config = this.owner.resolveRegistration('config:environment');
  if (config) {
    set(config, 'environment', 'test');
  }

  this.store = this.owner.lookup('service:store');
};

// https://github.com/ember-engines/ember-engines/issues/525#issuecomment-402131973
const setupEngineRenderingTest = function (hooks, config) {
  _setupRenderingTest(hooks, config);

  const app = getApplication();
  hooks.beforeEach(function () {
    _setupStoreService.call(this, app);

    // Register Engine-Specific Components
    const externalLinkStub = class LinkToExternalComponent extends Component {};
    this.owner.register('component:link-to-external', externalLinkStub);
  });

  hooks.afterEach(function () {
    return settled().then(() => {
      if (this.server) {
        this.server.shutdown();
        delete this.server;
      }
    });
  });
};

const setupEngineTest = function (hooks, config) {
  _setupTest(hooks, config);

  const app = getApplication();
  hooks.beforeEach(function () {
    _setupStoreService.call(this, app);

    // Register Engine-Specific Components
    const externalLinkStub = class LinkToExternalComponent extends Component {};
    this.owner.register('component:link-to-external', externalLinkStub);
  });

  // Teardown Mirage
  hooks.afterEach(function () {
    return settled().then(() => {
      if (this.server) {
        this.server.shutdown();
        delete this.server;
      }
    });
  });
};

export { setupEngineRenderingTest, setupEngineTest };

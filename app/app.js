import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'engine-testing/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  Resolver = Resolver;
  engines = {
    analytics: {
      dependencies: {
        services: [{ newAuth: 'auth' }],
      },
    },
  };
}

loadInitializers(App, config.modulePrefix);

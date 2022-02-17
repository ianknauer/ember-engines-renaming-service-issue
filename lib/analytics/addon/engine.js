import classic from 'ember-classic-decorator';
import Engine from 'ember-engines/engine';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';

const { modulePrefix } = config;

@classic
class Eng extends Engine {
  modulePrefix = modulePrefix;

  Resolver = Resolver;

  dependencies = {
    services: ['newAuth'],
  };
}

loadInitializers(Eng, modulePrefix);

export default Eng;

/**
 * This is an in-repo-engine, but they work the same as standalone engines.
 * I just made it an in-repo-engine for convenience.
 */

import Engine from 'ember-engines/engine';
import Resolver from 'ember-engines/resolver'; // <=== IMPORTANT - custom resolver!!!
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix } = config;

const Eng = Engine.extend({
  modulePrefix,
  Resolver,

  dependencies: {
    // Here we define that we expect our hosting application to export a route called "pdp"
    // and a service called "session". This allows our application to reference them
    // as standard routes and services.
    externalRoutes: [
      'pdp'
    ],
    services: [
      'session'
    ]
  }
});

loadInitializers(Eng, modulePrefix);

export default Eng;

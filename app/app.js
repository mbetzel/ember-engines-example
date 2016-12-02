/**
 * This application includes the in-repo-engine called cart-engine.
 */

import Ember from 'ember';
import Resolver from 'ember-engines/resolver'; // NOTE: You must use the engines resolver!
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  // Here you can define how you import engines
  engines: {
    // Engine name is camel-cased (e.g. cart-engine becomes cartEngine)
    cartEngine: {
      dependencies: {
        externalRoutes: {
          // make the route "store.pdp" available to the cart-engine as "pdp"
          pdp: 'store.pdp'
        },
        services: [
          // make the session service available to the cart-engine
          'session'
        ]
      }
    }
  }
});

loadInitializers(App, config.modulePrefix);

export default App;

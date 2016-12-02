import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store', function() {
    this.route('pdp');
  });

  // cart-engine is a routable engine, so we mount it into our router and can then deeplink into it.
  // By default it would be mounted at this location in the route map as the engine's name,
  // but we've chosen to rename the route as "foo". So you can go to /foo and see cart-engine in action!
  this.mount('cart-engine', { as: 'foo' });
});

export default Router;

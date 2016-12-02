import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    returnToPDP() {
      // Routes have transitionToExternal() which allows us to transition to a route exported from our host application.
      this.transitionToExternal('pdp');
    }
  }
});

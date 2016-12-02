import Ember from 'ember';

export default Ember.Controller.extend({
  sessionService: Ember.inject.service('session'),

  /**
   * Note that we're pulling this in from sessionService, which is in fact exported from the host application!
   */
  fullName: Ember.computed.alias('sessionService.fullName'),

  actions: {
    clickedReturnToPDP() {
      this.send('returnToPDP');
    }
  }
});

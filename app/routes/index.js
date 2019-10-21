import Route from '@ember/routing/route';

export default Route.extend({
  redirect() {
    this._super(...arguments);
    this.transitionTo('projects');
  }
});

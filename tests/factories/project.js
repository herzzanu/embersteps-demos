import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('project', {
  default: {
    name() {
      return 'Project';
    }
  },

  traits: {
    withUser: {
      user: FactoryGuy.belongsTo('user', { projects: this })
    }
  }
});

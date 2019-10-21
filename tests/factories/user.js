import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('user', {
  default: {
    firstName() {
      return 'John';
    },

    lastName() {
      return 'Doe';
    }
  }
});

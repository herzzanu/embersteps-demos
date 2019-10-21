import { Scenario } from 'ember-data-factory-guy';

export default class extends Scenario {
  run() {
    let users = this.makeList('user', 3);
    users.forEach((model) => this.mockFindRecord('user').returns({ model }));
    this.mockFindAll('user').returns({ models: users });
    this.mockCreate('user');
  }
}

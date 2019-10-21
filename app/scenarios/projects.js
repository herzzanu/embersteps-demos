import { Scenario } from 'ember-data-factory-guy';

export default class extends Scenario {
  run() {
    let projects = this.makeList('project', 3, 'withUser'); 
    projects.forEach((model) => this.mockFindRecord('project').returns({ model }));
    this.mockFindAll('project').returns({ models: projects });
  }
}

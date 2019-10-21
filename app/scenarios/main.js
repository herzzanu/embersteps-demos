import { Scenario } from 'ember-data-factory-guy';

import Users from './users';
import Projects from './projects';

Scenario.settings({
  logLevel: 1,
  responseTime: 1000
});

export default class extends Scenario {
  run() {
    this.include([Users, Projects]);
  }
}

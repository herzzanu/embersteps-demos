import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { computed } from '@ember/object';

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),

  projects: hasMany('project'),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`.trim();
  })
});

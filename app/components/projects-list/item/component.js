import Component from '@ember/component';
import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { task } from 'ember-concurrency';

@classic
class ItemComponent extends Component {
  @service store

  tagName = ''

  showModal = false
  newUser = null

  @(task(function* (model) {
    yield model.save();
    this.set('project.user', model);
    this.set('showModal', false);
  }).drop()) save

  @action
  onCreate() {
    this.setProperties({ showModal: true, newUser: this.store.createRecord('user') });
  }
}

export default ItemComponent;
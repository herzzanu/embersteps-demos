import Component from '@ember/component';
import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

@classic
class SelectUserComponent extends Component {
  @service store

  tagName = ''

  user
  options

  onCreate() {}

  @action
  fetchOptions() {
    this.set('options', this.store.query('user', {}));
  }

  @action
  createUser() {
    this.onCreate();
  }
}

export default SelectUserComponent;

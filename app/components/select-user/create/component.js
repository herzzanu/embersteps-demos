import Component from '@ember/component';
import classic from 'ember-classic-decorator';
import { action } from '@ember/object';

@classic
class CreateUserComponent extends Component {
  tagName = ''

  onCreate() {}

  @action
  onClick() {
    this.onCreate();
    this.select.actions.close();
  }
}

export default CreateUserComponent;

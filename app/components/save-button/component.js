import Component from '@ember/component';
import classic from 'ember-classic-decorator';
import { task, timeout } from 'ember-concurrency';

@classic
class SaveButtonComponent extends Component {
  timeLeft = 5

  @task(function * () {
    yield this.save.perform();
    yield this.send.perform();
  }) saveAndSend

  @task(function * () {
    let { timeLeft } = this
    
    for (let index = timeLeft - 1; index >= 0; index--) {
      yield timeout(1000);
      this.set('timeLeft', index);
    }

    this.set('timeLeft', timeLeft);
  }) send

  @task(function * () {
    yield timeout(3000);
  }) save
}

export default SaveButtonComponent;

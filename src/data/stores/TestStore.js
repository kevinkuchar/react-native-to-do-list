import { observable } from 'mobx';

class TestStore {
  @observable counter = 5;

  increment() {
    this.counter++;
    console.log('increment', this.counter);
  }

  decrement() {
    this.counter--;
    console.log('decrement', this.counter);
  }
}

export default new TestStore();

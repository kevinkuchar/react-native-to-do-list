import { observable, action } from 'mobx';

class ListStore {
  @observable counter = 5;
  @observable lists = [];

  @action updateCollection = (lists) => {
    this.lists = lists;
  }
}

export default new ListStore();

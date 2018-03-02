import { observable, action } from 'mobx';

class ListStore {
  @observable lists = [];
  @observable activeList;

  @action updateCollection = (lists) => {
    this.lists = lists;
  }

  @action addToCollection = (list) => {
    this.lists = [...this.lists, list];
  }

  @action updateActiveList = (listId) => {
    this.activeList = listId;
  }
}

export default new ListStore();

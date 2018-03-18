import { observable, computed, action } from 'mobx';

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

  @computed get currentList() {
    return this.lists.find(list => list.id === this.activeList);
  }
}

export default new ListStore();

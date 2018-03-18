import Service from '../Service';
import ListStore from '../stores/ListStore';

const ListService = new Service({
  url: '/list',
  actions: {
    GET: ListStore.updateCollection,
    POST: ListStore.addToCollection
  }
});

ListService.createList = function createList(params) {
  return this.post(params)
    .then(res => res.data.id);
}.bind(ListService);

export default ListService;

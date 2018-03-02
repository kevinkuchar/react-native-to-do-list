import Service from '../Service';
import ListStore from '../stores/ListStore';

const ListService = new Service({
  url: 'http://192.168.1.76/to-do-api/public/api/list',
  actions: {
    GET: ListStore.updateCollection,
    POST: ListStore.addToCollection
  }
});

export default ListService;

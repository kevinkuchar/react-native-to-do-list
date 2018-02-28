import Service from './Service';
import ListStore from '../data/stores/ListStore';

const ListService = new Service({
  url: 'http://192.168.1.76/to-do-api/public/api/list',
  actions: {
    get: ListStore.updateCollection,
    post: ListStore.updateCollection
  }
});

export default ListService;

import { createStore } from 'redux';
// import * as Redux from 'redux';
import rootReducer from '../reducers/root_reducer';




// console.log(Redux);
const configureStore = () => createStore(rootReducer);

export default configureStore;

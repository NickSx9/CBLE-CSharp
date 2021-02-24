import {combineReducers} from 'redux';
import videoReducers from './reducer-videoList';
import ActivePageReducers from './reducer-active-page';

const allReducers = combineReducers({
   cliplist:  videoReducers,
   activePage: ActivePageReducers
});

export default allReducers;
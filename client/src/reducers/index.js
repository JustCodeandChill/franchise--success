import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import franchiseInfoReducer from './franchiseInfoReducer';
import navbarReducer from './navbarReducer';

export default combineReducers({
    franchises : franchiseInfoReducer,
    menuClicked : navbarReducer,
    form : formReducer 
})
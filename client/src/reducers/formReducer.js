// This reducer handles submmitted value from ContactForm
import {SUBMIT_FORM} from '../actions';

export default  function(state = {}, action){
    switch (action.type) {
        case SUBMIT_FORM:
            // console.log('in submit form reducer');
            return state;
    }
}
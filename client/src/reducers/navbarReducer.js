import {MENU_CLICK} from '../actions/type';

export default function(state=false, action) {
    switch (action.type) {
        case MENU_CLICK:
            return (!state);
        default:
            return state;
    }
} 
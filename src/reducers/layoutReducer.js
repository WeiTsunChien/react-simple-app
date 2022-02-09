import {
    SET_PAGE_TITLE
} from '../constants/actionTypes';

const INIT_STATE = {
    pageTitle: '首頁'
};

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case SET_PAGE_TITLE:
            return { ...state, pageTitle: action.payload };
        default:
            return state;
    }
}
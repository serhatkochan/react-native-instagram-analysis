import {PENDING, SET_INSTAGRAM_DATA} from "../constants/instagram";

const initialState = {
    loading: true,
    data: {},
};

const instagram = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return {
                ...state,
                loading: true,
            }
        case SET_INSTAGRAM_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default instagram;

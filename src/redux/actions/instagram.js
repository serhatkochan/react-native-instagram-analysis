import {PENDING, GET_INSTAGRAM_DATA, SET_INSTAGRAM_DATA} from "../constants/instagram";

export const pending = () => ({
    type: PENDING,
})

export const getInstagramData = () => ({
    type: GET_INSTAGRAM_DATA,
});

export const setInstagramData = (data) => ({
    type: SET_INSTAGRAM_DATA,
    payload: data,
});

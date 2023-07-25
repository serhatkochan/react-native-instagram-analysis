import axios from "axios";

export const getInstagramDataService = () => {
    return axios.get('https://www.instagram.com/p/CtgvB7JNfxJ/embed/');
}
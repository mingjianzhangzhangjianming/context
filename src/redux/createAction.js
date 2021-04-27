import { INCREMENT, DELMENT, WITHLIST } from "./actionType";
import Axios from "axios";

export function increment(value) {
    return {
        type: INCREMENT,
        value
    }
}

export function delment(value) {
    return {
        type: DELMENT,
        value
    }
}

export function withlist(value) {
    return {
        type: WITHLIST,
        value
    }
}
// const $http = async function createRequers() {
//     const res = await Axios.get("https://api.apiopen.top/getJoke?type=text")
//     return res
// }
export function withlistAsntAction() {
    // return {
    //     type: WITHLIST,
    //     value
    // }
    // console.log(dispatch)
    return dispatch => {
        // setTimeout(() => {
        //     dispatch(withlist(123))
        // },4000)
        // $http().then(res => console.log(res))
        // dispatch(withlist($http()))
        Axios.get("https://api.apiopen.top/getJoke?type=text")
        .then(res => dispatch(withlist(res.data.result)))
    
    }
}
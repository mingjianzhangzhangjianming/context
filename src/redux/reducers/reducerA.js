
import { INCREMENT, WITHLIST } from "../actionType";

const initState = {
    count: 99,
    list: []
}
export default function reducerA(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state,count: action.value }
        case WITHLIST:
            return { ...state,list: action.value }
        default:
            return state
    }
}
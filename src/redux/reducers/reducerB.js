import { DELMENT } from "../actionType";

const initState = {
    num: 48
}

export default function reducerB(state = initState,action) {
    switch(action) {
        case DELMENT:
            return {num: state.initState.num - action.value}

        default: 
            return state    
    }
}
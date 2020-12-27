import { ACTION_TYPES } from "../actions/TextInput";

const initialState = {
    list: [],
    listInput:[]
}
//TextInput.list
export const TextInput = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list:state.list.filter(x => x._id !== action.payload)
            }

        default:
            return state;
    }
}

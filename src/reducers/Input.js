import { ACTION_TYPES } from "../actions/Input";

const initialState = {
    listInput:[]
}
//Input.listInput

export const Input = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_INPUT:
            return {
                ...state,
                listInput: [...action.payload]
            }
        case ACTION_TYPES.CREATE_INPUT:
            return {
                ...state,
                listInput: [...state.listInput, action.payload]
            }
        case ACTION_TYPES.DELETE_INPUT:
            return {
                ...state,
                listInput:state.listInput.filter(x => x._id !== action.payload)
            }

        default:
            return state;
    }
}
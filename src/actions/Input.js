import api from "./api";

export const ACTION_TYPES ={
    FETCH_ALL_INPUT :'FETCH_ALL_INPUT',
    DELETE_INPUT :'DELETE_INPUT',
    CREATE_INPUT :'CREATE_INPUT'
}

export const fetchAllInput = () => dispatch => {
    api.Input().fetchAllInput()
        .then(res => {
            console.log(res)
            dispatch({ 
                type: ACTION_TYPES.FETCH_ALL_INPUT,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}
export const createInput = (data, onSuccess) => dispatch => {
    api.Input().createInput(data)
        .then(res =>{
            dispatch({
                type: ACTION_TYPES.CREATE_INPUT,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const DeleteInput = (id, onSuccess) => dispatch => {
    api.Input().deleteInput(id)
        .then(res =>{
            dispatch({
                type: ACTION_TYPES.DELETE_INPUT,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}
 
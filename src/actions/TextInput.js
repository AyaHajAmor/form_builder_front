import api from "./api";

export const ACTION_TYPES ={
    CREATE:'CREATE',
    DELETE : 'DELETE',
    FETCH_ALL :'FETCH_ALL',
    FETCH_BY_ID :'FETCH_BY_ID',
    FETCH_ALL_INPUT :'FETCH_ALL_INPUT',
    DELETE_INPUT :'DELETE_INPUT',
    CREATE_INPUT :'CREATE_INPUT'
}

// --------------------form----------------------------

export const fetchAll = () => dispatch => {
    api.TextInput().fetchAll()
        .then(res => {
            console.log(res)
            dispatch({ 
                type: ACTION_TYPES.FETCH_ALL,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}
export const fetchById = () => dispatch => {
    api.TextInput().fetchById()
        .then(res => {
            console.log(res)
            dispatch({ 
                type: ACTION_TYPES.FETCH_BY_ID,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}
export const create = (data, onSuccess) => dispatch => {
    api.TextInput().create(data)
        .then(res =>{
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    api.TextInput().delete(id)
        .then(res =>{
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}
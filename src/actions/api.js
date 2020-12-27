import axios from "axios";

const baseUrl = 'http://localhost:7000/'

export default {
    TextInput(url = baseUrl + 'Form/AllForms') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            delete: id => axios.delete(url + id)
        }
    },
    Input(url = baseUrl + 'Form') {
        return {
            fetchAllInput: idform => axios.get(url + idform),
            createInput: newRecord => axios.post(url+'/AddInput', newRecord),
            DeleteInput: id => axios.delete(url + id)
        }
    }

}
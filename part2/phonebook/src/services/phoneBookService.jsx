import axios from 'axios';
const url = "http://localhost:3001/persons";

const addPhoneBook = (phoneObject) => {
    const request = axios.post(url,phoneObject);
    console.log(request);
    return request.then(response=>response.data);
} 

const deletePhoneBook = (id) => {
    console.log("id",id);
    const request = axios.delete(`${url}/${id}`);
    console.log(request);
    return request.then(response=>response.data);
}

export default {addPhoneBook,deletePhoneBook};
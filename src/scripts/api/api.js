import axios from 'axios';
import Model from '../model/Model';

axios.defaults.baseURL = `http://127.0.0.1:8080/`;

const get = (param) => axios.get(`${encodeURIComponent(param)}}`)
    .then(({data = {}} = {}) =>
        new Model(data))
    .catch(err =>
        console.log('erreur de requete : ',err));


export default get;

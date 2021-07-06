import axios from 'axios';
import { ALLDATA } from '../index';

async function getAllDataApi() {
    let data;
    await axios.get(
        ALLDATA,
    )
        .then(function (response) {

            data = response;
        })
        .catch(function (err) {
            data = err.response;
        }); 

    return data;
}

export default getAllDataApi;
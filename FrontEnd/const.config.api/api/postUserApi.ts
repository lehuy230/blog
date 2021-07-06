import axios from 'axios';
import { ALLDATA } from '../index';

async function postUserApi(prams) {
    let data;
    console.log(prams)
    await axios.post(
        ALLDATA,prams
    )
        .then(function (response) {

            data = response;
        })
        .catch(function (err) {
            data = err.response;
        }); 

    return data;
}

export default postUserApi;
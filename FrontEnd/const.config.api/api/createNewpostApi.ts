import axios from 'axios';
import { POST } from '../index';

async function createNewPostApi(prams) {
    let data;
    console.log(prams)
    await axios.post(
        POST,prams
    )
        .then(function (response) {

            data = response;
        })
        .catch(function (err) {
            data = err.response;
        }); 

    return data;
}

export default createNewPostApi;
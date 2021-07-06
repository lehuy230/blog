import axios from 'axios';
import { POST } from '../index';

async function getNewPostApi(user_id) {
    let data;
    let url = `${POST}?user_id=${user_id}`
    await axios.get(
        url,
    )
        .then(function (response) {

            data = response;
        })
        .catch(function (err) {
            data = err.response;
        }); 

    return data;
}

export default getNewPostApi;
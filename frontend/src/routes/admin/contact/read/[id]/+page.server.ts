import { PUBLIC_BACKEND_URL } from '$env/static/public';
import axios from 'axios';

export const load = async ({ locals, params, cookies }) => {

    const response = await axios({
        method:'GET',
        url:PUBLIC_BACKEND_URL + '/contact/info/' + params.id,
        headers:{
            Authorization: 'Bearer ' + cookies.get('token')
        }
    });
    return {
        user: locals.user,
        contact: response.data
    };
};
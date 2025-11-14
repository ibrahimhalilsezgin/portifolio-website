import { PUBLIC_BACKEND_URL } from '$env/static/public';
import axios from 'axios';

export const load = async ({ locals, params }) => {

    const response = await axios({
        method:'GET',
        url:PUBLIC_BACKEND_URL + '/api/projectinfo/' + params.id,
    });
    return {
        user: locals.user,
        project: response.data
    };
};
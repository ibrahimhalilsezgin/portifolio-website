import { PUBLIC_BACKEND_URL } from '$env/static/public'
import axios from 'axios'

export const load = async ({params}) => {
    const response = await axios({
        url:PUBLIC_BACKEND_URL + '/api/bloginfo/' + params.id,
        method:'GET'
    });

    return {
        blog:response.data,
        params: params
    };
}
import { PUBLIC_BACKEND_URL } from '$env/static/public';
import axios from 'axios';

export const load = async ({cookies}) => {
    const response = await axios({
        url: `${PUBLIC_BACKEND_URL}/about/info`,
        method:'GET',
        headers:{
            Authorization: 'Bearer ' + cookies.get('token')
        }
    });

    return {
        about: response.data
    }
};
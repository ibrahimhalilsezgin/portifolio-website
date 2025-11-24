import { PUBLIC_BACKEND_URL } from '$env/static/public';
import { redirect } from '@sveltejs/kit';
import axios from "axios";
export const load = async ({ locals, cookies }) => {
    try {
        const response = await axios({
            method:'GET',
            url:PUBLIC_BACKEND_URL + '/api/AllInfo',
        });

        return {
            api: response.data
        }
    } catch(err:any) {
        redirect(302, "/maintenance")
    }

};
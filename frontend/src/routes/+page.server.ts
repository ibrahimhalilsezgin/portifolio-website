import { redirect } from '@sveltejs/kit';
import axios from "axios";
export const load = async ({ locals, cookies }) => {
    try {
        const response = await axios({
            method:'GET',
            url:'http://localhost:3000/api/AllInfo',
            headers:{
                Authorization: 'Bearer ' + cookies.get('token')
            }
        });

        return {
            api: response.data
        }
    } catch(err:any) {
        redirect(302, "/maintenance")
    }

};
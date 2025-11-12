import { redirect } from '@sveltejs/kit';
import axios from "axios";
export const load = async ({ locals, cookies }) => {
    if(!locals.user) return redirect(303, '/admin/login');
    const response = await axios({
        method:'GET',
        url:'http://localhost:3000/settings/skills',
        headers:{
            Authorization: 'Bearer ' + cookies.get('token')
        }
    });

    
    console.log(response.data)

    return {
        skills: response.data
    }

};
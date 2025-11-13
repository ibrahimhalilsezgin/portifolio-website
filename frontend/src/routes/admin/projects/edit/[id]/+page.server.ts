import axios from 'axios';

export const load = async ({ locals, params }) => {

    const response = await axios({
        method:'GET',
        url:'http://localhost:3000/api/projectinfo/' + params.id,
    });
    return {
        user: locals.user,
        project: response.data
    };
};
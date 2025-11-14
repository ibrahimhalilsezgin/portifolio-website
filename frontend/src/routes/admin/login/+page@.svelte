<script lang="ts">
  import { goto } from "$app/navigation";
    import axios from "axios";
  import { setCookie } from "../../../utils/cookie.util";
  import { PUBLIC_BACKEND_URL } from "$env/static/public";
    let formData = {
        username:'',
        password:''
    }

    let error = '';
    async function login() {
        try {
            const response = await axios({
                method:'post',
                url:PUBLIC_BACKEND_URL+'/auth/login',
                data: {
                    username: formData.username,
                    password: formData.password
                }
            });

            if(response.status == 200) {
                console.log(response.data)
                setCookie('token', response.data.token);
                goto('/admin/')
            }
        
        } catch (err:any) {
            if(err.response) {
                error = err.response.data;
            }
        }
    };
</script>

<div class="flex justify-center items-center">
    <div class="flex flex-col gap-4 w-2/4 h-1/2 items-center rounded-4xl">
        <h1 class="text-center text-4xl">Admin Login</h1>
        <label for="username" class="text-lg">Username:</label>
        <input type="text" class="border border-white/20 rounded-lg h-12 w-1/3 pl-4 " bind:value={formData.username}>
        <label for="password" class="text-lg">Password:</label>
        <input type="password" class="border border-white/20 rounded-lg h-12 w-1/3 pl-4 " bind:value={formData.password}>
        <button class="border border-hit rounded-lg h-10 w-20 text-2xl flex items-center justify-center hover:bg-hit cursor-pointer" on:click={login}>Login</button>
    </div>
</div>
<script lang="ts">
    import axios, { type AxiosResponse } from "axios";
  import { getCookie, setCookie } from "../../../utils/cookie.util.js";
  import { fade } from "svelte/transition";
  import { PUBLIC_BACKEND_URL } from "$env/static/public";
    export let data

    let formData = {
        username: data.user.username,
        newpassword: '',
        currentpassword: ''
    };

    let success = false;
    let error = ''
    async function submit() {
        try {
            const response = await axios({
                url:PUBLIC_BACKEND_URL + '/skills/updatesettings',
                headers:{
                    Authorization: 'Bearer ' + getCookie('token')
                },
                method:'post',
                data:formData
            });

            if(response.status == 200) {
                success = true
            }
            setTimeout(() => {
                setCookie('token', '');
                window.location.reload();
            },2500)
        } catch (error:any) {
            console.log(error.response.data.message)
            error = error.response.data.message
        }
    }
</script>



<div class="flex">
    <div class="w-1/2">
        <h1 class="text-4xl">Settings Overview</h1>
    </div>
</div>
<div class="flex flex-col gap-8 h-full pt-4 justify-center items-center ">
    {#if success}
    <div class="bg-green-400 rounded-lg h-12 w-120 text-2xl text-nowrap flex items-center text-black justify-center" transition:fade>
        Settings Successfully Updated.
    </div>
    {/if}
    {#if error}
    <div class="bg-red-400 rounded-lg h-12 w-120 text-2xl text-nowrap flex items-center text-black justify-center" transition:fade>
        {error}
    </div>
    {/if}
    <div class="flex flex-col">
        <label for="Username" class="text-xl">Username: </label>
        <input type="text" id="Username" class="border-adminbg-3 border-2 rounded-lg h-12 w-62 pl-4 outline-0" bind:value={formData.username}>
    </div>
    <div class="flex flex-col">
        <label for="NewPassword" class="text-xl">New Password: </label>
        <input type="password" id="NewPassword" class="border-adminbg-3 border-2 rounded-lg h-12 w-62 pl-4 outline-0" bind:value={formData.newpassword}>
    </div>
    <div class="flex flex-col">
        <label for="CurrentPassword" class="text-xl">Current Password: </label>
        <input type="password" id="CurrentPassword" class="border-adminbg-3 border-2 rounded-lg h-12 w-62 pl-4 outline-0" bind:value={formData.currentpassword}>
    </div>
    <div>
        <button class="border-2 border-adminbg-3 w-32 h-8 rounded-lg hover:bg-adminbg-3 cursor-pointer" on:click={submit}>Submit</button>
    </div>
</div>
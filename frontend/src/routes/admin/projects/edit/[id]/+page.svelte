<script lang="ts">
    import axios from "axios";
    import { FileUp, ArrowLeftIcon } from "lucide-svelte";
    import { getCookie } from "../../../../../utils/cookie.util";
    import { slide } from "svelte/transition";
    import { goto } from "$app/navigation";
  import { PUBLIC_BACKEND_URL } from "$env/static/public";

    export let data;

    let formData = {
        title: data.project.title,
        description: data.project.description
    }
    let success = false;
    async function submit() {
        const response = await axios({
            method:'post',
            url:PUBLIC_BACKEND_URL + '/projects/updateproject',
            headers:{
                Authorization: 'Bearer ' + getCookie('token')
            },
            data: {
                id: data.project.id,
                title:formData.title,
                description: formData.description
            }
        })

        if(response.status == 200) {
            success = true
        }
    }
</script>

{#if success}
    <div class="bg-green-500 p-2 rounded-full flex jusfiy-center text-center items-center text-black" transition:slide>
        <div class="w-full text-xl">
            Project is Sucessfully Updated.
        </div>
    </div>
{/if}
<div class="h-full flex justify-center items-center">
    <div class="flex flex-col h-4/5 w-3/5 rounded-4xl bg-adminbg-2 border-adminbg-3 border shadow-2xl shadow-black/10 items-center jusfiy-center">
        
        
        <button class="w-full mt-7 hover:text-yellow-400 cursor-pointer" on:click={() => goto('/admin/projects')}>
            <ArrowLeftIcon size={60}/>
        </button>
        <h1 class="md:text-4xl pt-3">Update Project</h1>
        <h2>You're Editing Now <span class="text-pink-500 text-xl flex items-center flex-col">{data.project.title}</span></h2>
        <div class="h-full w-full flex flex-col pt-20 gap-1 jusfiy-center items-center">
            <label for="title" class="text-2xl font-semibold">Title: </label>
            <input type="text" id="title" class="border rounded-lg w-5/12 h-1/12" bind:value={formData.title}>
            <label for="description" class="text-2xl font-semibold">Description: </label>
            <input type="text" id="description" class="border rounded-lg w-5/12 h-1/12" bind:value={formData.description}>
            
            <button class="border rounded-lg h-1/10 w-1/5 mt-5 cursor-pointer" on:click={submit}>
                Submit
            </button>
        </div>
    </div>
</div>
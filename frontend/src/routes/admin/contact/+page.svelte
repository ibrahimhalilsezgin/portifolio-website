<script lang="ts">
    import axios from "axios";
    import { getCookie } from "../../../utils/cookie.util.js";
    import { slide } from "svelte/transition";
    import { Pencil, Plus,Search, Trash2,X } from "lucide-svelte";
    import { onMount } from "svelte";
    import { cubicOut } from "svelte/easing";
  import { goto } from "$app/navigation";
  import LinkImageHover from "$lib/Components/LinkImageHover.svelte";
  import { PUBLIC_BACKEND_URL } from "$env/static/public";



    let contacts:any = [];
    async function getProjects() {
        const response = await axios({
            method:'GET',
            url:PUBLIC_BACKEND_URL + '/contact/',
            headers:{
                Authorization: 'Bearer ' + getCookie('token')
            }
        });

        contacts = response.data;
    };
    onMount(async () => {
        getProjects();
    })

</script>


<div class="flex">
    <div class="w-1/2">
        <h1 class="text-4xl">Contacts</h1>
    </div>

</div>
<div class="flex flex-col gap-8 pt-4 items-center h-min">
    <div class="bg-adminbg-2 h-min w-full p-5 rounded-2xl flex gap-4">
        <div class="bg-adminbg-2 flex  rounded-lg border-adminbg-3 border h-10 items-center pl-2 text-white/60">
            <label for="search" class="cursor-text"><Search  /></label>
            <input type="text" id="search" class="w-full h-full pl-3 ml-2 focus:outline-none" placeholder="Search inquiries...">
        </div>
        <div class="bg-adminbg-2 flex w-min rounded-lg border-adminbg-3 border h-10 items-center pl-2 text-white/60 text-nowrap p-4 justify-center cursor-pointer">
            All Categories
        </div>
    </div>
    <div class="flex w-full overflow-y-auto h-[calc(100vh-40vh)]">
        <div class="border w-full rounded-2xl border-adminbg-3 h-min flex justify-start items-center overflow-Y-auto">
            <div class="flex flex-col w-full">
                <div class="flex w-full pb-5 border-t z-40 border-t-adminbg-3 p-4">
                    <div class="w-1/5 flex text-center justify-center items-center">
                        Name
                    </div>
                    <div class="w-1/5 flex text-center justify-center items-center">
                        E-Mail
                    </div>
                    <div class="w-1/5 flex text-center justify-center items-center">
                        Phone Number
                    </div>

                    <div class="w-1/5 flex text-center justify-center items-center">
                        Actions
                    </div>
                </div>
                
                {#each contacts as contact}
                <div class="flex w-full pb-5 border-t z-40 border-t-adminbg-3 p-4" transition:slide={{axis:"y",easing:cubicOut}}>
                        <div class="w-1/5 flex text-center justify-center items-center">
                            {contact.name}
                        </div>
                        <div class="w-1/5 flex text-center justify-center items-center">
                            <div class="bg-green-400/30 w-min min-w-24 flex items-center text-nowrap p-2 justify-center text-green-300 rounded-lg">
                                {contact.email}
                            </div>
                        </div>
                        <div class="w-1/5 flex text-center justify-center items-center">
                            <div class="bg-green-400/30 w-min min-w-24 flex items-center text-nowrap p-2 justify-center text-green-300 rounded-lg">
                                {contact.phone}
                            </div>
                        </div>

                        
                        <div class="w-1/5 flex text-center justify-center items-center gap-4">
                            <button class="cursor-pointer hover:text-slate-500" on:click={() => goto('/admin/contact/read/' + contact.id)}>
                                <Search size={32} />
                            </button>

                        </div>
                    </div>
                        {/each}
            </div>
        </div>
    </div>

</div>


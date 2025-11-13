<script lang="ts">
    import axios from "axios";
    import { getCookie } from "../../../utils/cookie.util.js";
    import { slide } from "svelte/transition";
    import { Pencil, Plus,Search, Trash2,X } from "lucide-svelte";
    import { onMount } from "svelte";
    import { cubicOut } from "svelte/easing";
  import { goto } from "$app/navigation";
  import LinkImageHover from "$lib/Components/LinkImageHover.svelte";



    let certificates:any = [];
    async function getCertificates() {
        const response = await axios({
            method:'GET',
            url:'http://localhost:3000/api/certificates',
            headers:{
                Authorization: 'Bearer ' + getCookie('token')
            }
        });

        certificates = response.data;
    };
    onMount(async () => {
        getCertificates();
    })
    async function deleteCertificate(id:string) {
        const response = await axios({
            method:'POST',
            url:'http://localhost:3000/certificates/deletecertificate',
            data:{
                id: id
            },
            headers:{
                Authorization: 'Bearer ' + getCookie('token')
            }
        });
        if(response.status == 200) {
            getCertificates()
        }
    }
</script>


<div class="flex">
    <div class="w-1/2">
        <h1 class="text-4xl">Manage Certificates</h1>
    </div>
    <div class="w-1/2 flex justify-end items-center">
        <button class="flex gap-3 bg-blue-600 h-12 items-center justify-center w-42 rounded-lg cursor-pointer" on:click={() => goto('/admin/certificates/create')}>
            <div><Plus /></div>
            <div>Add New Certificates</div>
        </button>
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
                <div class="flex w-full pb-5 p-4">
                    <div class="w-1/3">
                        Certification
                    </div>
                    <div class="w-1/3 flex text-center justify-center items-center">
                        Description
                    </div>
                    <div class="w-1/3">
                        
                    </div>
                    <div>
                        Actions
                    </div>
                </div>
                
                {#each certificates as certification}
                    <div class="flex w-full pb-5 border-t z-40 border-t-adminbg-3 p-4" transition:slide={{axis:"y",easing:cubicOut}}>
                        <LinkImageHover cl="w-1/3" hrefDetails={{text: certification.title, href:"#",imgAlt: certification.title, imgSrc:`http://localhost:3000/certificates/${certification.title}.jpeg`}} />
                        <div class="flex items-center gap-4">
                            <button class="cursor-pointer hover:text-red-500" on:click={() => deleteCertificate(certification.id)}>
                                <Trash2 size={32}/>
                            </button>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

</div>


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



    let blogs:any = [];
    async function getBlogs() {
        const response = await axios({
            method:'GET',
            url:PUBLIC_BACKEND_URL+'/api/blogs',
            headers:{
                Authorization: 'Bearer ' + getCookie('token')
            }
        });

        blogs = response.data;
    };
    onMount(async () => {
        getBlogs();
    })
    async function deleteBlog(id:string) {
        const response = await axios({
            method:'POST',
            url:PUBLIC_BACKEND_URL + '/blog/delete',
            data:{
                id: id
            },
            headers:{
                Authorization: 'Bearer ' + getCookie('token')
            }
        });
        if(response.status == 200) {
            getBlogs()
        }
    }
</script>


<div class="flex">
    <div class="w-1/2">
        <h1 class="text-4xl">Manage Blogs</h1>
    </div>
    <div class="w-1/2 flex justify-end items-center">
        <button class="flex gap-3 bg-blue-600 h-12 items-center justify-center w-42 rounded-lg cursor-pointer" on:click={() => goto('/admin/blogs/create')}>
            <div><Plus /></div>
            <div>Add New Blogs</div>
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
                        Title
                    </div>
                    <div class="w-1/3 flex text-center justify-center items-center">
                        Created
                    </div>
                    <div>
                        Actions
                    </div>
                </div>
                
                {#each blogs as Blog}
                    <div class="flex w-full pb-5 border-t z-40 border-t-adminbg-3 p-4" transition:slide={{axis:"y",easing:cubicOut}}>
                        <LinkImageHover cl="w-1/3" hrefDetails={{text: Blog.title, href:"#",imgAlt: Blog.title, imgSrc:`${PUBLIC_BACKEND_URL}/projects/${Blog.title}.jpeg`}} />
                        <div class="w-full">
                            <div class="bg-green-400/30 w-min min-w-24 flex items-center text-nowrap p-2 justify-center text-green-300 rounded-lg">
                                {Blog.createdDate}
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <button class="cursor-pointer hover:text-slate-500" on:click={() => goto('/admin/blogs/update/' + Blog.id)}>
                                <Pencil size={32} />
                            </button>
                            <button class="cursor-pointer hover:text-red-500" on:click={() => deleteBlog(Blog.id)}>
                                <Trash2 size={32}/>
                            </button>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

</div>


<script lang="ts">
  import { goto } from "$app/navigation";
  import { PUBLIC_BACKEND_URL } from "$env/static/public";
  import axios from "axios";
  import { onMount } from "svelte";

    let blogs:any = [];
    
    async function getBlogs() {
        try {
            const response = await axios({
                url:`${PUBLIC_BACKEND_URL}/api/blogs`,
                method:'GET'
            });

            blogs = response.data;
        } catch(error:any) {
            console.log(error);
        }
    }

    onMount(() => {
        getBlogs();
    });
</script>




<div class="flex flex-col pl-12">
    <div class="text-4xl font-semibold">
        Bloglara Göz Atın 
    </div>
</div>

<div class="grid grid-cols-3 mt-10 pl-12 gap-8 pr-12">
    {#each blogs as blog}
        <div class="flex flex-col border border-[#212121] rounded-lg bg-[#1b1b1b]">
            <img class="rounded-t-sm aspect-video" src="{blog.imageURL ? blog.imageUrl : `${PUBLIC_BACKEND_URL}/blogs/${blog.id}.jpeg}`}" alt={blog.title}>
            <div class="text-3xl font-semibold p-3 text-center">
                {blog.title}
            </div>
            <div class="p-3 pt-1 w-full h-full">
                <span class="text-wrap break-all">{@html blog.content.slice(0, 120) + '...'}</span>
            </div>
            <div class="mt-5 flex">
                <button class="bg-blue-300 text-black w-full text-lg font-semibold h-8 cursor-pointer" on:click={() => goto('/blog/' + blog.id)}>
                    Devamını Oku..
                </button>
            </div>
        </div>
    {/each}
</div>
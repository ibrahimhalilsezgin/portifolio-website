<script>
    import { PUBLIC_BACKEND_URL } from '$env/static/public';

    export let data;
</script>



<div class="h-screen  flex flex-col items-center selection:bg-hit">
    <div class="flex justify-center w-250 h-100">
        <img src="{data.blog.imageURL ? data.blog.imageUrl : `${PUBLIC_BACKEND_URL}/blogs/${data.blog.id}.jpeg}`}" class="aspect-video w-full" alt="">
    </div>
    <div class="mt-12 w-full text-center">
        <h1 class="font-semibold text-7xl">{data.blog.title}</h1>
    </div>
    <div class="mt-20 flex-col gap-10  w-2/3 justify-center flex text-2xl">
        {@html data.blog.content}
    </div>
    <div class="mt-12 flex justify-end text-lg pb-5 text-gray-400">
        {data.blog.createdDate}
    </div>
</div>
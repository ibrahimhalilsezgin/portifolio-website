<script lang="ts">
    import { Palette, Code, User, Inbox, Settings, Bell, LogOut, CirclePlus, Search, LayoutDashboard, File } from "lucide-svelte"
    import { setCookie } from "../../utils/cookie.util.js";
    import { redirect } from "@sveltejs/kit";
  import { goto } from "$app/navigation";
	let { children, data } = $props();
</script>


<div class="flex h-screen bg-adminbg">
    <div class="w-2/12 h-screen bg-adminbg-3 flex flex-col items-center p-3">
        <div class="text-center text-3xl">
            Admin Panel
        </div>
        
        
        
        <div class="w-full mt-10 h-3/4 flex flex-col gap-4">
            <div class="bg-[#2E5979] text-lg flex items-center rounded-xl p-3 gap-4 hover:bg-[#2E5979] cursor-pointer" onclick={() => goto('/')}>
                <LayoutDashboard size={27} />
                Dashboard
            </div>
            
            
            <div class="text-lg flex items-center rounded-xl p-3 gap-4 hover:bg-[#2E5979] cursor-pointer" onclick={() => goto('/admin/skills')}>
                <Code size={27} />
                Skills
            </div>
            
            <div class="text-lg flex items-center rounded-xl p-3 gap-4 hover:bg-[#2E5979] cursor-pointer" onclick={() => goto('/admin/projects')}>
                <Palette size={27} />
                Projects
            </div>
            
            <div class="text-lg flex items-center rounded-xl p-3 gap-4 hover:bg-[#2E5979] cursor-pointer" onclick={() => goto('/admin/certificates')}>
                <File size={27} />
                Certificates
            </div>
            
            
            <div class="text-lg flex items-center rounded-xl p-3 gap-4 hover:bg-[#2E5979] cursor-pointer" onclick={() => goto('/admin/aboutme')}>
                <User size={27} />
                About Me
            </div>
            
            <div class="text-lg flex items-center rounded-xl p-3 gap-4 hover:bg-[#2E5979] cursor-pointer" onclick={() => goto('/admin/contact')}>
                <Inbox size={27} />
                Contact Inquiries
            </div>
            <hr>
            <div class="text-lg flex items-center rounded-xl p-3 gap-4 hover:bg-[#2E5979] cursor-pointer" onclick={() => goto('/admin/blogs')}>
                <Inbox size={27} />
                Blogs
            </div>
            
        </div>
        <hr class="text-black">
        <div class="w-full pt-4 flex flex-col gap-4 pl-4">
            
            
            <div class="text-lg flex items-center rounded-lg p-2 gap-4 hover:bg-[#2E5979] cursor-pointer" onclick={() => goto('/admin/settings')}>
                <Settings size={35}/>
                Settings
            </div>
            <div class="flex items-center gap-5">
                <img src="https://dummyimage.com/64x64/000/fff" alt="" class="rounded-full">
                <div class="flex flex-col">
                    <span class="font-semibold">{data.user.username}</span>
                    <span class="text-sm">Administrator</span>
                </div>
            </div>
        </div>
    </div>
    <div class="w-screen flex flex-col">
        <div class="bg-adminbg-2 w-full border-b-2 border-b-adminbg-3 h-[6%] flex items-center pl-8">
            <div class="text-xl w-1/2">
                Welcome!
            </div>
            <div class="w-1/2 flex justify-end gap-4 pr-15">
                <div class="bg-adminbg rounded-full w-10 h-10 flex items-center justify-center">
                    <Bell size={28}/>
                </div>
                <button class="bg-adminbg rounded-full w-10 h-10 flex items-center justify-center cursor-pointer" onclick={() => {setCookie('token', ''), window.location.reload()}}>
                    <LogOut size={28}/>
                </button>
            </div>
        </div>
        <div class="p-12 h-full">
            {@render children()}
        </div>
    </div>
</div>
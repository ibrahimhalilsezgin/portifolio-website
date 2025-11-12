<script lang="ts">
    import axios from "axios";
    import { CirclePlus, Search } from "lucide-svelte"
    const {data} = $props();
</script>



<div class="flex">
    <div class="w-1/2">
        <h1 class="text-4xl">Dashboard Overview</h1>
    </div>
    <div class="w-1/2 flex justify-end">
        <button class="rounded-lg bg-blue-500 w-48 gap-3 h-10 pl-3 flex items-center">
            <CirclePlus />
            Add New Project
        </button>
    </div>
</div>
<div class="flex flex-col gap-8 h-min pt-4 ">
    <!-- 3'lü info kısmı -->
    <div class="flex gap-8 h-full pt-4">
        <div class="bg-adminbg-2 w-3/4 h-1/5 rounded-2xl p-6 flex flex-col gap-2 border-adminbg-3 border">
        <div class="text-white/60 font-semibold">
            Total Views
        </div>
        <div class="text-3xl font-semibold">
            12,450
        </div>
        <div class="text-sm text-green-500">
            +5.2% this month
        </div>
    </div>
    <div class="bg-adminbg-2 w-3/4 h-1/5 rounded-2xl p-6 flex flex-col gap-2 border-adminbg-3 border">
        <div class="text-white/60 font-semibold">
            New Inquiries
        </div>
        <div class="text-3xl font-semibold">
            28
        </div>
        <div class="text-sm text-green-500">
            +12% this month
        </div>
    </div>
    <div class="bg-adminbg-2 w-3/4 h-1/5 rounded-2xl p-6 flex flex-col gap-2 border-adminbg-3 border">
        <div class="text-white/60 font-semibold">
            Project Count
        </div>
        <div class="text-3xl font-semibold">
            15
        </div>
        <div class="text-sm text-slate-300">
            Published
        </div>
    </div>
    </div>
    <div>
        <div class="flex">
            <div class="w-1/2">
                <h1 class="text-2xl">Recently Inquiries</h1>
            </div>
            <div class="w-1/2 flex justify-end">
                <div class="bg-adminbg-2 flex w-2/5 rounded-lg border-adminbg-3 border h-10 items-center pl-2 text-white/60">
                    <label for="search" class="cursor-text"><Search  /></label>
                    <input type="text" id="search" class="w-full h-full pl-3 ml-2 focus:outline-none" placeholder="Search inquiries...">
                </div>
            </div>
        </div>
        
        <div class="bg-adminbg-2 h-min pl-4 w-full mt-4 flex flex-col border-adminbg-3 border rounded-2xl">
            
            <div class="flex p-2 border-b border-b-adminbg-3">
                <div class="w-2/3 text-white/60">Sender</div>
                <div class="w-2/3 text-white/60">Subject</div>
                <div class="w-1/3 text-white/60">Date</div>
                <div class="w-1/3"></div>
            </div>
            <div>
                <div class="flex p-2 border-b border-b-adminbg-3">
                    <div class="w-2/3">Jane Cooper</div>
                    <div class="w-2/3 text-white/60">Project Collaboration Propsal</div>
                    <div class="w-1/3 text-white/60">Oct 25, 2023</div>
                    <div class="w-1/3 text-blue-600 flex justify-end pr-4"><a href="#a">View</a></div>
                </div>
            </div>
            <div>
                <div class="flex p-2 border-b border-b-adminbg-3">
                    <div class="w-2/3">Jane Cooper</div>
                    <div class="w-2/3 text-white/60">Project Collaboration Propsal</div>
                    <div class="w-1/3 text-white/60">Oct 25, 2023</div>
                    <div class="w-1/3 text-blue-600 flex justify-end pr-4"><a href="#a">View</a></div>
                </div>
            </div>
            <div>
                <div class="flex p-2 border-b border-b-adminbg-3">
                    <div class="w-2/3">Jane Cooper</div>
                    <div class="w-2/3 text-white/60">Project Collaboration Propsal</div>
                    <div class="w-1/3 text-white/60">Oct 25, 2023</div>
                    <div class="w-1/3 text-blue-600 flex justify-end pr-4"><a href="#a">View</a></div>
                </div>
            </div>
            <div>
                <div class="flex p-2 border-b border-b-adminbg-3">
                    <div class="w-2/3">Jane Cooper</div>
                    <div class="w-2/3 text-white/60">Project Collaboration Propsal</div>
                    <div class="w-1/3 text-white/60">Oct 25, 2023</div>
                    <div class="w-1/3 text-blue-600 flex justify-end pr-4"><a href="#a">View</a></div>
                </div>
            </div>
            <div>
                <div class="flex p-2 border-b border-b-adminbg-3">
                    <div class="w-2/3">Jane Cooper</div>
                    <div class="w-2/3 text-white/60">Project Collaboration Propsal</div>
                    <div class="w-1/3 text-white/60">Oct 25, 2023</div>
                    <div class="w-1/3 text-blue-600 flex justify-end pr-4"><a href="#a">View</a></div>
                </div>
            </div>
            <div>
                <div class="flex p-2 border-b border-b-adminbg-3">
                    <div class="w-2/3"></div>
                    <div class="w-2/3 text-white/60">Project Collaboration Propsal</div>
                    <div class="w-1/3 text-white/60">Oct 25, 2023</div>
                    <div class="w-1/3 text-blue-600 flex justify-end pr-4"><a href="#a">View</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
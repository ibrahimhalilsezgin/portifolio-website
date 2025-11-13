<script lang="ts">
    import axios from "axios";
    import { getCookie, setCookie } from "../../../utils/cookie.util.js";
    import { fade, slide } from "svelte/transition";
    import { Pencil, Plus, Search, Trash2, X } from "lucide-svelte";
    import { onMount } from "svelte";
    import { cubicOut } from "svelte/easing";


    let skills:any = [];
    async function getSkills() {
        const response = await axios({
            method:'GET',
            url:'http://localhost:3000/api/skills',
            headers:{
                Authorization: 'Bearer ' + getCookie('token')
            }
        });

        skills = response.data;
    }
    onMount(async () => {
        getSkills()
    })
    let newSkillformData = {
        title:'',
        proficiency: 0
    };

    let success = '';
    let error = {
        status: false,
        message:''
    };
    async function createNewSkill() {
        try {

            if(newSkillformData.proficiency > 100) newSkillformData.proficiency = 100;
            if(newSkillformData.proficiency < 0) newSkillformData.proficiency = 1;
            const response = await axios({
                url:'http://localhost:3000/skills/createskill',
                headers:{
                    Authorization: 'Bearer ' + getCookie('token')
                },
                method:'post',
                data:newSkillformData
            });

            if(response.status == 200) {
                success = 'Skill is Successfully Created';
                getSkills();
                CreateNewSkillModal.classList.remove('flex');
                CreateNewSkillModal.classList.add('hidden');
            }
        } catch (err:any) {
            console.log(err.response.data.message);
            error.status = true
            error.message = err.response.data.message;

            setTimeout(() => {
                error.status = false
            },2500)
        }
    }
    async function deleteSkill(title:string) {
        try {
            const response = await axios({
                url:'http://localhost:3000/skills/deleteskill',
                headers:{
                    Authorization: 'Bearer ' + getCookie('token')
                },
                method:'post',
                data:{
                    title:title
                }
            });

            if(response.status == 200) {
                success = 'Skill is Successfully Deleted';
                getSkills();
            }

        } catch (err:any) {
            console.log(err.response.data.message);
            error.status = true
            error.message = err.response.data.message;

            setTimeout(() => {
                error.status = false
            },2500)
        }
    }
    let CreateNewSkillModal:HTMLDivElement;
    async function openCreateNewSkillModal() {
        CreateNewSkillModal.classList.remove('hidden');
        CreateNewSkillModal.classList.add('flex');
    }
    async function closeCreateNewSkillModal() {
        CreateNewSkillModal.classList.remove('flex');
        CreateNewSkillModal.classList.add('hidden');
    }

    // data.skills[0].forEach(element => {
    //     console.log(element)
    // });
</script>
{#if error.status}
<div class="w-full flex items-center justify-center ">
    <div class="z-50 bg-red-400 w-100 h-12 rounded-xl flex items-center justify-center" transition:slide>
    {error.message.toUpperCase()}
    </div>
</div>
{/if}
{#if success}
<div class="w-full flex items-center justify-center ">
    <div class="z-50 bg-green-400 w-100 h-12 rounded-xl flex items-center justify-center" transition:slide>
    {success}
    </div>
</div>
{/if}
<div class="fixed z-10 bg-black/70 h-screen w-screen justify-center items-center hidden" bind:this={CreateNewSkillModal}>
    <div class="flex flex-col rounded-lg h-2/3 w-full items-center pr-100 z-20">
        <div class="bg-adminbg flex-col flex p-24 rounded-4xl">
            <div class="justify-end flex">
                 <div class="flex justify-end items-center w-min" on:click={closeCreateNewSkillModal}><X size={30} color="red" class="cursor-pointer" /></div>
            </div>
            <h1 class="text-4xl">New Skill</h1>
            <label for="skillName">Skill Name</label>
            <input type="text" id="skillName" class="border border-adminbg-3 rounded-lg w-min items-center h-8" bind:value={newSkillformData.title}>
            <label for="proficiency">Proficiency</label>
            <input type="number" id="proficiency" class="border border-adminbg-3 rounded-lg w-min h-8" bind:value={newSkillformData.proficiency}>
            <button class="border-adminbg-3 border rounded-lg w-52 mt-5 hover:bg-adminbg-3 cursor-pointer" on:click={createNewSkill}>
                Submit
            </button>
        </div>
    </div>
</div>
<div class="flex">
    <div class="w-1/2">
        <h1 class="text-4xl">Manage Skills</h1>
    </div>
    <div class="w-1/2 flex justify-end items-center">
        <button class="flex gap-3 bg-blue-600 h-12 items-center justify-center w-42 rounded-lg cursor-pointer" on:click={openCreateNewSkillModal}>
            <div><Plus /></div>
            <div>Add New Skills</div>
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
                        Skill
                    </div>
                    <div class="w-1/3">
                        Category
                    </div>
                    <div class="w-1/3">
                        Proficiency
                    </div>
                    <div>
                        Actions
                    </div>
                </div>
                
                {#each skills as skill}
                    <div class="flex w-full pb-5 border-t border-t-adminbg-3 p-4" transition:slide={{axis:"y",easing:cubicOut}}>
                        <div class="w-1/3 font-semibold">
                            {skill.title}
                        </div>
                        <div class="w-1/3">
                            <div class="bg-green-400/30 w-min min-w-24 flex items-center justify-center text-green-300 rounded-lg">
                                NULL
                            </div>
                        </div>
                        <div class="w-1/3">
                            <progress class="rounded-lg h-3 w-min" max="100" value={skill.proficiency}></progress>
                            <div>{skill.proficiency}%</div>
                        </div>
                        <div class="flex items-center gap-4">
                            <button class="cursor-pointer hover:text-slate-500">
                                <Pencil size={32} />
                            </button>
                            <button class="cursor-pointer hover:text-red-500" on:click={() => deleteSkill(skill.title)}>
                                <Trash2 size={32}/>
                            </button>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

</div>


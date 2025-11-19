<script>
    import { Link, Minus, MoveLeft, MoveRight, Square, X } from "lucide-svelte";
    import profilePhoto from "$lib/assets/adam.png" 
    import { goto } from "$app/navigation";
    import BlurFade from "$lib/Components/BlurFade.svelte";
    import axios from "axios";
    import { PUBLIC_BACKEND_URL } from "$env/static/public";
    import { getCookie } from "../../../utils/cookie.util.js";
  import { slide } from "svelte/transition";
    export let data;
    let formData = {
      name: data.about.name || "",
      role: data.about.role || "",
      aboutme: data.about.aboutme || "",
      github: data.about.github || "",
      linkedin: data.about.linkedin || "",
      instagram: data.about.instagram || "",
      twitter: data.about.twitter || "",
      facebook: data.about.facebook || "",
      experience: data.about.experience || "",
      projectCount: data.about.projectCount || "",
      happyClients: data.about.happyClients || "",
    };
    let success = false;
    async function updateAbout() {
      const response = await axios({
        url:`${PUBLIC_BACKEND_URL}/about/update`,
        method:'POST',
        headers:{
          Authorization: 'Bearer ' + getCookie('token') 
        },
        data:formData
      })
      if(response.status == 200) {
        success = true

        setTimeout(() => { success = false },2000);
      }
    }

</script>
{#if success}
  <div class=" bg-green-500 text-black rounded-xl flex items-center justify-center text-4xl p-2" transition:slide>
    Bilgiler Başarıyla Güncellendi.
  </div>
{/if}
<div class="h-full rounded-xl flex flex-col bg-[#5f5f5f]">
    <div class="w-full h-1/16 rounded-xl flex border-b border-b-[#424242] rounded-b-none">
        <div class="flex h-full items-center pl-4 gap-4 w-1/5">
            <MoveLeft />
            <MoveRight />
        </div>
        <div class="flex w-3/5 items-center justify-center">
            <div class="bg-[#635e5e] rounded-sm border border-[#3f3f3f] w-full flex h-[80%] items-center pl-2 gap-3 ">
                <Link size={18} />
                <input type="text" disabled value="https://ibo.rocks/" class="cursor-text w-full">
            </div>
        </div>
        <div class="flex h-full items-center gap-4 w-1/5 justify-end pr-3">
            <Minus size={20} />
            <Square size={18}/>
            <X />
        </div>
    </div>
    <div class="bg-[#121212] h-full flex">
<div class="m-12 md:mt-32 w-1/2 gap-2 flex-col md:flex bg-[#121212]">
    <BlurFade delay={0.25} >
        <div class="text-lg md:text-2xl text-white/40">Merhaba, Ben</div>
        <input type="text" class="pt-3 text-xl md:text-3xl" bind:value={formData.name}>
        <BlurFade delay={0.25 * 2} >
        <div class="text-hit text-2xl md:text-6xl">
            <input type="text" bind:value={formData.role}>
        </div>
        </BlurFade>
      </BlurFade>

      <div class="pt-8 flex gap-4 text-white/60">
        <div aria-label="links"
          class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
        >
          <i class="fab fa-instagram text-2xl md:text-3xl"></i>
      </div>
        <div aria-label="links"
          class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
        >
          <i class="fab fa-linkedin text-2xl md:text-3xl"></i>
      </div>
        <div aria-label="links"
          class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
        >
          <i class="fab fa-github text-2xl md:text-3xl"></i>
      </div>

      </div>
      <div class="flex gap-7 pt-8">
        <button
          class="border h-12 w-38 bg-hit border-hit rounded-lg font-semibold cursor-pointer"
          >İşe Al
        </button>
        <button class="border h-12 w-40 rounded-lg cursor-pointer" >CV'mi İndir</button>
      </div>

      <div
        class="md:flex md:items-center bg-black/40 w-80 md:w-150 text-nowrap rounded-2xl mt-8"
      >
        <div class="h-20 text-center md:h-40 flex justify-center flex-col p-8 md:w-1/3 ">
          <div class="flex w-min">
              <input type="number" class="text-hit md:text-2xl font-semibold w-10 no-spin" bind:value={formData.experience}>
              <div class="text-hit text-2xl font-semibold">+</div>
          </div>
          <div class="md:text-2xl">Deneyim</div>
        </div>
        <div class="md:h-18 bg-white/40 rounded-full w-1"></div>
        <hr class="text-white/20">
        <div class="h-20 md:h-40 flex justify-center flex-col p-8 md:w-1/3">
        <div class="flex w-min">
              <input type="number" class="text-hit md:text-2xl font-semibold w-10 no-spin" bind:value={formData.projectCount}>
              <div class="text-hit text-2xl font-semibold">+</div>
          </div>
          <div class="md:text-2xl text-center">Proje Sayısı</div>
        </div>
        <div class="md:h-18 bg-white/40 rounded-full w-1"></div>
        <hr class="text-white/20">
        <div class="h-20 text-center md:h-40 flex justify-center flex-col p-8 md:w-1/3 text-wrap">
        <div class="flex w-min">
              <input type="number" class="text-hit md:text-2xl font-semibold w-10 no-spin" bind:value={formData.happyClients}>
              <div class="text-hit text-2xl font-semibold">+</div>
          </div>
          <div class="md:text-2xl">Mutlu Müşteriler</div>
        </div>
      </div>
      <div class="pt-6">
        <button class="border p-4 rounded-xl cursor-pointer hover:bg-hit bg-adminbg-2" on:click={updateAbout}> Submit </button>
      </div>
    </div>
    <div class="m-12 md:mt-32 w-1/2 gap-2 flex-col md:flex bg-[#121212] ">
      <div class="flex-col flex gap-4 justify-center items-center ">
        <h1 class="text-3xl">Diğer Bilgiler</h1>
        <label for="aboutme" class="text-lg">Hakkımda</label>
        <textarea  id="aboutme" class="border rounded-lg p-1 w-full"  bind:value={formData.aboutme}></textarea>
        <label for="github" class="text-lg">Github</label>
        <input type="text" id="github" class="border rounded-lg p-1  w-full"  bind:value={formData.github}>
        <label for="linkedin" class="text-lg">Linkedin</label>
        <input type="text" id="linkedin" class="border rounded-lg p-1  w-full" bind:value={formData.linkedin}>
        <label for="instagram" class="text-lg">Instagram</label>
        <input type="text" id="instagram" class="border rounded-lg p-1  w-full" bind:value={formData.instagram}>
        <label for="twitter" class="text-lg">Twitter</label>
        <input type="text" id="twitter" class="border rounded-lg p-1  w-full" bind:value={formData.twitter}>
        <label for="facebook" class="text-lg">Facebook</label>
        <input type="text" id="facebook" class="border rounded-lg p-1  w-full" bind:value={formData.facebook}>
      </div>
    </div>
</div>
</div>
<script lang="ts">
  import CircleProgressBar from "$lib/Components/CircleProgressBar.svelte";
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  import { Diamonds } from "svelte-loading-spinners";
  import { goto } from "$app/navigation";
  import Particles from "$lib/Components/Particles.svelte";
  import BlurFade from "$lib/Components/BlurFade.svelte";
  import axios from "axios";
  import { PUBLIC_BACKEND_URL } from "$env/static/public";
  import { getCookie, setCookie } from "../utils/cookie.util";
  import { Cookie, Facebook, GithubIcon, Instagram, LinkedinIcon, Twitter } from "lucide-svelte";
  import Seo from "$lib/Components/Seo.svelte";

		
  export let data;
  let loading = true;

  let selectedProject = "";
  let selectedCertificate = "";

  let contactForm = {
    email:'',
    name:'',
    phone:'',
    message:''
  }

  async function sendcontact(){
    const response = await axios({
      url:PUBLIC_BACKEND_URL + '/contact/send',
      method:'post',
      data:contactForm
     })
  }
  let cookieAccess:string;
  async function acceptCookie() {
      setCookie('allowCollectCookies', 'true')
      cookieAccess = 'true'
  }
  onMount(async () => {
    cookieAccess = getCookie('allowCollectCookies') as string;
    if(!cookieAccess) {
        setCookie('allowCollectCookies', 'false')
    }

    if(cookieAccess = 'true') {
        const response = await axios({
          url:PUBLIC_BACKEND_URL + '/collect',
          method:'post'
        })
        console.log(response)
    }

    setTimeout(() => {
      loading = false;
    },2000)
  });

</script>

<Seo title="Anasayfa"/>
{#if selectedProject}
  
  <button class="fixed h-screen w-screen bg-black/80 z-40 flex justify-center items-center bottom-0 top-0 left-0 right-0" on:click={() => selectedProject = ""}>
    <div class=" z-50">
        <img src="{selectedProject}" alt="" class="w-300 z-50 aspect-video">
        <div class="items-center flex justify-center text-2xl">
        </div>
    </div>
  </button>
{/if}
{#if selectedCertificate}
  
  <button class="fixed h-screen w-screen bg-black/80 z-40 flex justify-center items-center bottom-0 top-0 left-0 right-0" on:click={() => selectedCertificate = ""}>
    <div class=" z-50">
        <img src="{selectedCertificate}" alt="" class="w-300 z-50">
        <div class="items-center flex justify-center text-2xl">
        </div>
    </div>
  </button>
{/if}
{#if cookieAccess == 'false'}
  <div class="hidden md:flex fixed items-center h-15 gap-2 bottom-0 bg-[#424242] w-full z-50" transition:slide>
    <div>
      <Cookie size={60} />  
    </div>
    <div class="text-4xl">
      Deneyiminizi geliştirmek için çerezleri kullanıyoruz. Kabul etmeniz durumunda site daha iyi çalışır.
    </div>
    <button class="border hover:bg-hit rounded-lg h-full w-48 cursor-pointer" on:click={acceptCookie}>
        Kabul Et
    </button>
  </div>
{/if}
{#if !loading}
<div class="absolute w-full -z-10">
  <Particles />
</div>
<div class="flex pl-12 pr-12" transition:fade>
  <BlurFade delay={0.25} >
  <div class="md:m-12 md:mt-32 w-1/2 gap-2 flex-col md:flex ">
        <div class="text-lg md:text-2xl text-white/40">Merhaba, Ben</div>
        <h1 class="pt-3 text-xl md:text-3xl text-nowrap">{data.api.about.name}</h1>
        <BlurFade delay={0.25 * 2} >
        <div class="text-hit text-2xl md:text-6xl text-nowrap">{data.api.about.role}</div>
        </BlurFade>
        
        <div class="pt-8 flex gap-4 text-white/60 z-20">
          {#if data.api.about.github}
          <a href={data.api.about.github} aria-label="links"
          class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
          >
          <GithubIcon/>
        </a>
        {/if}
        
        {#if data.api.about.linkedin}
        <a href={data.api.about.linkedin} aria-label="links"
        class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
        >
        <LinkedinIcon />
      </a>
      {/if}
      
      {#if data.api.about.instagram}
      <a href={data.api.about.instagram} aria-label="links"
      class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
      >
      <Instagram />
    </a>
    {/if}
    
    {#if data.api.about.twitter}
    <a href={data.api.about.twitter} aria-label="links"
    class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
    >
    <Twitter />
  </a>
  {/if}
  
  {#if data.api.about.facebook}
  <a href={data.api.about.facebook} aria-label="links"
  class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
  >
  <Facebook />
</a>
{/if}


</div>
<div class="flex gap-7 pt-2 z-20">

<button class="border h-12 w-40 rounded-lg cursor-pointer" on:click={() => goto('/cv.pdf')}>CV'mi İndir</button>
</div>

<div
class="md:flex md:items-center bg-black/40 w-80 md:w-150 text-nowrap rounded-2xl mt-8"
>
<div class="h-20 text-center md:h-40 flex justify-center flex-col p-8 md:w-1/3 ">
  <div class="text-hit md:text-2xl font-semibold">5+</div>
  <div class="md:text-2xl">Deneyim</div>
</div>
<div class="md:h-18 bg-white/40 rounded-full w-1"></div>
<hr class="text-white/20">
<div class="h-20 md:h-40 flex justify-center flex-col p-8 md:w-1/3">
  <div class="text-hit text-center md:text-2xl font-semibold">5+</div>
  <div class="md:text-2xl text-center">Proje Sayısı</div>
</div>
<div class="md:h-18 bg-white/40 rounded-full w-1"></div>
<hr class="text-white/20">
<div class="h-20 text-center md:h-40 flex justify-center flex-col p-8 md:w-1/3 text-wrap">
  <div class="text-hit md:text-2xl font-semibold">10+</div>
  <div class="md:text-2xl">Mutlu Müşteriler</div>
</div>
</div>
</div>
</BlurFade>
</div>
<BlurFade delay={0.05} >
  
  <div class="flex flex-col justify-center items-center mt-15 text-center" id="services">
    <div class="text-3xl md:text-5xl text-white">Hizmetlerim</div>
    <div class="pt-4 text-sm md:text-xl text-white/60">
      <!-- Buraya Açıklama Yazılabilir -->
    </div>

    <div class="grid md:grid-rows-2 md:grid-cols-3 gap-12">
      <div class="rounded-lg w-100 h-min text-center min-h-70 bg-[#1b1b1b]">
        <i class="fa fa-user-group text-hit text-6xl pt-6"></i>
        <div class="text-hit text-2xl font-semibold pt-3">Full-Stack Web Geliştirme</div>
        <div class="text-white/50 pt-5 p-5">
          Bir Full-Stack Developer olarak, kullanıcı dostu arayüzlerden sağlam ve ölçeklenebilir Backend sistemlerine kadar projelerin tüm aşamalarında çözüm üretmekteyim.
          Özellikle Svelte, Node.js ve MongoDB gibi modern teknolojileri kullanarak inovatif dijital çözümler tasarlıyor ve hayata geçiriyorum.
          Amacım, sadece çalışan değil, aynı zamanda mükemmel bir kullanıcı deneyimi sunan ürünler ortaya koymaktır. Karmaşık sorunları çözmek ve her projeye değer katmak benim için önceliktir.
        </div>
      </div>
      <div class="rounded-lg w-100 text-center h-70 bg-[#1b1b1b]">
        <i class="fa fa-user-group text-hit text-6xl pt-6"></i>
        <div class="text-hit text-2xl font-semibold pt-3">Özel API Geliştirme</div>
        <div class="text-white/50 pt-5 p-5">
          Uygulama ihtiyaçlarınıza özel, yüksek performanslı RESTful API'leri tasarlama ve oluşturma.
        </div>
      </div>
      <div class="rounded-lg w-100 text-center h-70 bg-[#1b1b1b]">
        <i class="fa fa-user-group text-hit text-6xl pt-6"></i>
        <div class="text-hit text-2xl font-semibold pt-3">Veritabanı Yönetimi</div>
        <div class="text-white/50 pt-5 p-5">
          Proje gereksinimlerine uygun, optimize edilmiş MongoDB çözümlerinin kurulumu ve yönetimi.
        </div>
      </div>
      <div class="rounded-lg w-100 text-center h-70 bg-[#1b1b1b]">
        <i class="fa fa-user-group text-hit text-6xl pt-6"></i>
        <div class="text-hit text-2xl font-semibold pt-3">Bulut (Cloud) Entegrasyonu</div>
        <div class="text-white/50 pt-5 p-5">
          Uygulamalarınızı bulut platformlarına dağıtılması, yapılandırılması ve sürekli entegrasyon/dağıtım süreçleri.
        </div>
      </div>
      
    </div>
  </div>
</BlurFade>
  <BlurFade delay={0.05} >

  <div class="flex flex-col items-center justify-center mt-20 text-center" id="aboutme">
    <div class="text-3xl md:text-4xl">Hakkımda</div>
    <div class="text-white/50 mt-4 text-sm md:text-xl w-2/3">
      {data.api.about.aboutme}
    </div>
    <div class="flex items-center justify-center-safe pt-18">
      <div class="md:w-2/4 text-white/60 text- md:text-3xl flex items-center text-center">

      </div>
    </div>
    <div class="rounded-lg mt-5 bg-hit flex items-center justify-center p-3 gap-2 cursor-pointer">
      <i class="fa fa-download text-2xl"></i>
      Download CV
    </div>

    <div class="mt-10 md:flex gap-10">
      <div class="md:grid md:grid-cols-8 gap-12 place-content-center">
        {#each data.api.skills as skill} 
          <div class="text-center md:text-3xl">
            <CircleProgressBar value={skill.proficiency}/>
            <div>{skill.title}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  </BlurFade>
  <BlurFade delay={0.05} >

  <div class="justify-center items-center flex flex-col mt-20">

    <div class="text-3xl md:text-4xl">
      Portfolio
    </div>

    <div class="grid md:grid-cols-3 mt-15 gap-6 p-15">
      
      {#each data.api.projects as project}
        <button class="bg-[#252525]  h-min rounded-xl cursor-pointer " on:click={() => selectedProject = `${PUBLIC_BACKEND_URL}/projects/${project.title}.jpeg`}>
          <img src={`${PUBLIC_BACKEND_URL}/projects/${project.title}.jpeg`} class="w-full max-h-69 aspect-video rounded-t-2xl" alt="">
          <div class="text-center text-white/60 text-lg pt-2 font-semibold">
            {project.title}
          </div>
        </button>
      {/each}
      
      </div>
  </div>
</BlurFade>
  <BlurFade delay={0.05} >

  <div class="justify-center items-center flex flex-col mt-20">

    <div class="text-3xl md:text-4xl">
      Sertifikalarım
    </div>
    <div class="grid md:grid-cols-3 gap-6 p-15">
      
      {#each data.api.certificates as certification}
        <button class="bg-[#252525]  h-min rounded-lg cursor-pointer" on:click={() => {selectedCertificate = `${PUBLIC_BACKEND_URL}/certificates/${certification.title}.jpeg`}}>
          <img src={`${PUBLIC_BACKEND_URL}/certificates/${certification.title}.jpeg`} class="w-full rounded-t-2xl" alt="">
          <div class="text-center text-white/60 text-lg pt-2 font-semibold">
            {certification.title}
          </div>
        </button>
      {/each}
           
    </div>
  </div>
</BlurFade>

  <div class="flex text-center flex-col items-center justify-center pt-16 mb-20" id="contact">
      <div class="md:text-4xl">İletişim</div>
      <div class="md:text-lg text-white/60">Bağlantınızı Genişletmek için Benimle İletişime geçin</div>

      <div class="pt-5 md:flex gap-8">
        <div class="flex flex-col gap-8 mb-10 ">
          <input type="text" class="bg-[#1b1b1b] rounded-lg h-12 md:w-120 pl-4" placeholder="İsim" bind:value={contactForm.name}>
          <input type="tel" class="bg-[#1b1b1b] rounded-lg h-12 md:w-120 pl-4" id="phone" name="phone" placeholder="5XX XXX XX XX" minlength="10" pattern={"[5][0-9]{9}"} inputmode="numeric" autocomplete="tel" bind:value={contactForm.phone}>
        </div>
        <div>
          <div class="flex flex-col gap-8">
            <input type="email" class="bg-[#1b1b1b] rounded-lg h-12 md:w-120 pl-4" placeholder="Email" bind:value={contactForm.email}>
            <textarea class="bg-[#1b1b1b] rounded-lg h-36 md:w-120 pl-4 pt-4" placeholder="Mesaj" bind:value={contactForm.message}></textarea>
            <div class="flex justify-end">
                <button class="border-white border p-3 rounded-lg w-25 justify-end cursor-pointer" on:click={sendcontact}>Gönder</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  {:else}
  <div class="flex flex-col fixed w-full h-screen justify-center items-center">
    <Diamonds />
  </div>
{/if}


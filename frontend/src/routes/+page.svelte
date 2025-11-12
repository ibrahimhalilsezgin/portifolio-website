<script lang="ts">
  import CircleProgressBar from "$lib/Components/CircleProgressBar.svelte";
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  import { Diamonds } from "svelte-loading-spinners";
  import profilePhoto from "$lib/assets/adam.png" 
  let loading = false;

  let selectedImage = "";
  onMount(() => {
    setTimeout(() => {
      loading = false;
    },2000)
  });
</script>


<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if selectedImage}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="fixed h-screen w-screen bg-black/80 z-40 flex justify-center items-center bottom-0 top-0 left-0 right-0" on:click={() => selectedImage = ""}>
    <div class="bg-black z-50">
        <img src="{selectedImage}" alt="" class="w-300 z-50">
        <div class="items-center flex justify-center text-2xl">
        </div>
    </div>
  </div>
{/if}

{#if !loading}
  <div class="flex " transition:fade>
    <div class="m-12 md:mt-32 w-1/2 gap-2 flex-col md:flex">
      <div
        class="absolute ml-24 md:w-[400px] md:h-[400px] bg-hit rounded-full blur-[150px] opacity-15 -z-10"
      ></div>
      <div class="text-lg md:text-2xl text-white/40">Merhaba, Ben</div>
      <h1 class="pt-3 text-xl md:text-3xl">İbrahim Halil Sezgin</h1>
      <div class="text-hit text-2xl md:text-6xl">Full-Stack Developer</div>

      <div class="pt-8 flex gap-4 text-white/60">
        <a href="https://instagram.com/ibrhmhl" aria-label="links"
          class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
        >
          <i class="fab fa-instagram text-2xl md:text-3xl"></i>
      </a>
        <a href="https://www.linkedin.com/in/ibrahimhalilsezgin/" aria-label="links"
          class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
        >
          <i class="fab fa-linkedin text-2xl md:text-3xl"></i>
      </a>
        <a href="https://github.com/ibrahimhalilsezgin" aria-label="links"
          class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
        >
          <i class="fab fa-github text-2xl md:text-3xl"></i>
      </a>

      </div>
      <div class="flex gap-7 pt-8">
        <button
          class="border h-12 w-38 bg-hit border-hit rounded-lg font-semibold cursor-pointer"
          >İşe Al
        </button>
        <button class="border h-12 w-40 rounded-lg cursor-pointer"
          >CV'mi İndir</button
        >
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
    <div class="w-1/2 justify-center md:flex hidden">
      <div
        class="absolute w-[400px] h-[400px] mt-65 bg-black/20 rounded-full z-1"
      ></div>
      <img src={profilePhoto} alt="" class="z-2 aspect-square w-[700px] h-[700px]" />
    </div>
  </div>

  <div class="flex flex-col justify-center items-center mt-30 text-center" id="services">
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
  <div class="flex flex-col items-center justify-center mt-20 text-center" id="aboutme">
    <div class="text-3xl md:text-4xl">Hakkımda</div>
    <div class="text-white/50 mt-4 text-sm md:text-xl w-2/3">
      Küçüklüğümden beri bilgisayarlara olan ilgim, beni yazılım bölümüne yöneltti. Lise hayatıma başlamadan önce kendi çapımda JavaScript ve Node.js öğrendim. Zamanla bu alanda başarılı olduğumu hissettim. Zeytinburnu Mesleki ve Teknik Anadolu Lisesi’ne başladığımda, alan olarak Bilişim Teknolojilerini; dal olarak ise Yazılım Geliştirmeyi seçtim.
      Devam eden  Lise hayatım boyunca, algoritmalar başta olmak üzere sırasıyla Python, C# ile masaüstü program geliştirme, HTML, CSS, Bootstrap, .NET ve .NET MVC, SQL öğrendim. Aktif Olarak DOS INDUSTRIES şirketinde Stajyer Öğrenci olarak çalışıyorum.

    </div>
    <div class="flex items-center justify-center-safe pt-18">
      <div class="md:w-2/4 text-white/60 text- md:text-3xl flex items-center text-center">

      </div>
    </div>
    <div class="rounded-lg mt-5 bg-hit flex items-center justify-center p-3 gap-2 cursor-pointer">
      <i class="fa fa-download text-2xl"></i>
      Download CV
    </div>

    <div class="mt-10 md:flex gap-10 grid grid-cols-2">
      <div class="text-center md:text-3xl">
        <CircleProgressBar value=99/>
        <div>NodeJS</div>
      </div>
      <div class="text-center md:text-3xl">
        <CircleProgressBar value=99/>
        <div>Javascript</div>
      </div>
      <div class="text-center md:text-3xl">
        <CircleProgressBar value=60/>
        <div>Svelte</div>
      </div>
      <div class="text-center md:text-3xl">
        <CircleProgressBar value=70/>
        <div>Html</div>
      </div>
      <div class="text-center md:text-3xl">
        <CircleProgressBar value=70/>
        <div>Css</div>
      </div>
      <div class="text-center md:text-3xl">
        <CircleProgressBar value=30/>
        <div>C#</div>
      </div>
      <div class="text-center md:text-3xl">
        <CircleProgressBar value=10/>
        <div>.NET MVC</div>
      </div>
    </div>
  </div>

  <div class="justify-center items-center flex flex-col mt-20">

    <div class="text-3xl md:text-4xl">
      Portfolio
    </div>
    <div class="md:flex grid grid-cols-2 gap-4 md:gap-10 mt-8">
      <div class="bg-hit p-4 md:text-lg rounded-lg mt-3">All</div>
      <div class="bg-[#1b1b1b] p-4 md:text-lg rounded-lg mt-3">Websites</div>
    </div>
    <div class="grid md:grid-cols-3 mt-15 gap-6 p-15">
      <div class="bg-[#252525]  h-min rounded-lg cursor-pointer " on:click={() => selectedImage = "1.png"}>
        <img src="1.png" alt="">
        <div class="text-center text-white/60 text-lg pt-2 font-semibold">
          NodeShop
        </div>
      </div>
      <div class="grid md:grid-cols-3 mt-15 gap-6 p-15">
      <div class="bg-[#252525]  h-min rounded-lg cursor-pointer " on:click={() => selectedImage = "2.png"} >
        <img src="2.png" alt="">
        <div class="text-center text-white/60 text-lg pt-2 font-semibold">
          EminTeknikTesisat.com
        </div>
      </div>
    
    </div>
  </div>
  <div class="justify-center items-center flex flex-col mt-20">

    <div class="text-3xl md:text-4xl">
      Sertifikalarım
    </div>
    <div class="grid md:grid-cols-3 gap-6 p-15">
      <div class="bg-[#252525]  h-min rounded-lg cursor-pointer" on:click={() => {selectedImage = "s1.jpg"}}>
        <img src="s1.jpg" alt="">
        <div class="text-center text-white/60 text-lg pt-2 font-semibold">
          DoS / DDos Saldırıları ve Koruma
        </div>
      </div>
      <div class="bg-[#252525]  h-min rounded-lg cursor-pointer" on:click={() => {selectedImage = "s2.jpg"}}>
        <img src="s2.jpg" alt="">
        <div class="text-center text-white/60 text-lg pt-2 font-semibold">
          HTML5 ile Web Geliştirme
        </div>
      </div>
      <div class="bg-[#252525]  h-min rounded-lg cursor-pointer" on:click={() => {selectedImage = "s3.jpg"}}>
        <img src="s3.jpg" alt="">
        <div class="text-center text-white/60 text-lg pt-2 font-semibold">
          Node.js ile Web Programlama
        </div>
      </div>
      <div class="bg-[#252525]  h-min rounded-lg cursor-pointer" on:click={() => {selectedImage = "s4.jpg"}}>
        <img src="s4.jpg" alt="">
        <div class="text-center text-white/60 text-lg  font-semibold">
          Siber Güvenliğe Giriş
        </div>
      </div>
      <div class="bg-[#252525]  h-min rounded-lg cursor-pointer" on:click={() => {selectedImage = "s5.jpg"}}>
        <img src="s5.jpg" alt="">
        <div class="text-center text-white/60 text-lg font-semibold">
          Web Sitesi Kullanılabilirliği
        </div>
      </div>
      <div class="bg-[#252525]  h-min rounded-lg cursor-pointer" on:click={() => {selectedImage = "s6.jpg"}}>
        <img src="s6.jpg" alt="">
        <div class="text-center text-white/60 text-lg  font-semibold">
          Javascript (Basic)
        </div>
      </div>
      <div class="bg-[#252525]  h-min rounded-lg cursor-pointer" on:click={() => {selectedImage = "s7.jpg"}}>
        <img src="s7.jpg" alt="">
        <div class="text-center text-white/60 text-lg  font-semibold">
          Javascript (Intermediate)
        </div>
      </div>
      <div class="bg-[#252525]  h-min rounded-lg cursor-pointer" on:click={() => {selectedImage = "s8.jpg"}}>
        <img src="s8.jpg" alt="">
        <div class="text-center text-white/60 text-lg  font-semibold">
          Python (Basic)
        </div>
      </div>
      
    
    </div>
  </div>
  <div class="flex text-center flex-col items-center justify-center pt-16 mb-20" id="contact">
      <div class="md:text-4xl">İletişim</div>
      <div class="md:text-lg text-white/60">Bağlantınızı Genişletmek için Benimle İletişime geçin</div>

      <div class="pt-5 md:flex gap-8">
        <div class="flex flex-col gap-8 mb-10 ">
          <input type="text" class="bg-[#1b1b1b] rounded-lg h-12 md:w-120 pl-4" placeholder="İsim">
          <input type="text" class="bg-[#1b1b1b] rounded-lg h-12 md:w-120 pl-4" placeholder="Telefon Numarası">
        </div>
        <div>
          <div class="flex flex-col gap-8">
            <input type="email" class="bg-[#1b1b1b] rounded-lg h-12 md:w-120 pl-4" placeholder="Email">
            <textarea class="bg-[#1b1b1b] rounded-lg h-36 md:w-120 pl-4 pt-4" placeholder="Mesaj"></textarea>
            <div class="flex justify-end">
                <button class="border-white border p-3 rounded-lg w-25 justify-end">Gönder</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  {:else}
  <div class="flex h-screen justify-center items-center">
    <Diamonds />
  </div>
{/if}


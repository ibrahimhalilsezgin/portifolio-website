<script>
    import { Link, Minus, MoveLeft, MoveRight, Square, X } from "lucide-svelte";
    import profilePhoto from "$lib/assets/adam.png" 
    import { goto } from "$app/navigation";
    import BlurFade from "$lib/Components/BlurFade.svelte";

</script>
<div class="h-full rounded-xl flex flex-col pb-4 bg-[#5f5f5f]">
    <div class="w-full h-1/16 rounded-xl flex border-b border-b-[#424242] rounded-b-none">
        <div class="flex h-full items-center pl-4 gap-4 w-1/5">
            <MoveLeft />
            <MoveRight />
        </div>
        <div class="flex w-3/5 items-center justify-center">
            <div class="bg-[#635e5e] rounded-sm border border-[#3f3f3f] w-full flex h-[80%] items-center pl-2 gap-3 ">
                <Link size={18} />
                <input type="text" disabled value="https://ibo.rocks/" class="">
            </div>
        </div>
        <div class="flex h-full items-center gap-4 w-1/5 justify-end pr-3">
            <Minus size={20} />
            <Square size={18}/>
            <X />
        </div>
    </div>
    <div class="bg-[#121212] h-full">
<div class="m-12 md:mt-32 w-1/2 gap-2 flex-col md:flex bg-[#121212]">
    <BlurFade delay={0.25} >
        <div class="text-lg md:text-2xl text-white/40">Merhaba, Ben</div>
        <input type="text" value="İbrahim Halil Sezgin" class="pt-3 text-xl md:text-3xl">
        <BlurFade delay={0.25 * 2} >
        <div class="text-hit text-2xl md:text-6xl">
            <input type="text" value="Full-Stack Developer">
        </div>
        </BlurFade>
      </BlurFade>

      <div class="pt-8 flex gap-4 text-white/60">
        <a href="#" aria-label="links"
          class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
        >
          <i class="fab fa-instagram text-2xl md:text-3xl"></i>
      </a>
        <a href="#" aria-label="links"
          class="border h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:text-hit"
        >
          <i class="fab fa-linkedin text-2xl md:text-3xl"></i>
      </a>
        <a href="#" aria-label="links"
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
        <button class="border h-12 w-40 rounded-lg cursor-pointer" >CV'mi İndir</button>
      </div>

      <div
        class="md:flex md:items-center bg-black/40 w-80 md:w-150 text-nowrap rounded-2xl mt-8"
      >
        <div class="h-20 text-center md:h-40 flex justify-center flex-col p-8 md:w-1/3 ">
          <div class="flex w-min">
              <input type="number" class="text-hit md:text-2xl font-semibold w-10 no-spin" value="5">
              <div class="text-hit text-2xl font-semibold">+</div>
          </div>
          <div class="md:text-2xl">Deneyim</div>
        </div>
        <div class="md:h-18 bg-white/40 rounded-full w-1"></div>
        <hr class="text-white/20">
        <div class="h-20 md:h-40 flex justify-center flex-col p-8 md:w-1/3">
        <div class="flex w-min">
              <input type="number" class="text-hit md:text-2xl font-semibold w-10 no-spin" value="5">
              <div class="text-hit text-2xl font-semibold">+</div>
          </div>
          <div class="md:text-2xl text-center">Proje Sayısı</div>
        </div>
        <div class="md:h-18 bg-white/40 rounded-full w-1"></div>
        <hr class="text-white/20">
        <div class="h-20 text-center md:h-40 flex justify-center flex-col p-8 md:w-1/3 text-wrap">
        <div class="flex w-min">
              <input type="number" class="text-hit md:text-2xl font-semibold w-10 no-spin" value="10">
              <div class="text-hit text-2xl font-semibold">+</div>
          </div>
          <div class="md:text-2xl">Mutlu Müşteriler</div>
        </div>
      </div>
    </div>
</div>
</div>
<script lang="ts">
  const hitColor: string = "#FA6E00";
</script>

<div class="flex">
  <div class="m-12 mt-32 w-1/2 gap-2 flex-col flex">
    <div
      class="absolute ml-24 w-[400px] h-[400px] bg-hit-orange rounded-full blur-[150px] opacity-15"
    ></div>
    <div class="text-2xl text-white/40">Hi I am</div>
    <div class="pt-3 text-3xl">İbrahim Halil Sezgin</div>
    <div class="text-[{hitColor}] text-6xl">Full-Stack Developer</div>

    <div class="pt-8 flex gap-4 text-white/60">
      <div
        class="border h-12 w-12 rounded-full flex justify-center items-center"
      >
        <i class="fab fa-instagram text-3xl"></i>
      </div>
      <div
        class="border h-12 w-12 rounded-full flex justify-center items-center"
      >
        <i class="fab fa-linkedin text-3xl"></i>
      </div>
      <div
        class="border h-12 w-12 rounded-full flex justify-center items-center"
      >
        <i class="fab fa-github text-3xl"></i>
      </div>
      <div
        class="border h-12 w-12 rounded-full flex justify-center items-center"
      >
        <i class="fab fa-x-twitter text-3xl"></i>
      </div>
    </div>
    <div class="flex gap-7 pt-8">
      <button
        class="border h-12 w-38 bg-hit-orange border-hit-orange rounded-lg font-semibold cursor-pointer"
        >Hire Me
    </button>
      <button class="border h-12 w-40 rounded-lg cursor-pointer">Download CV</button>
    </div>

    <div class="flex items-center bg-black/40 w-150  text-nowrap rounded-2xl mt-8">
      <div class="h-40 flex justify-center flex-col p-8 w-1/3">
        <div class="text-hit-orange text-2xl font-semibold">5+</div>
        <div class="text-2xl">Experinces</div>
      </div>
      <div class="h-18 bg-white/40 rounded-full w-1"></div>
      <div class="h-40 flex justify-center flex-col p-8 w-1/3">
        <div class="text-hit-orange text-2xl font-semibold">5+</div>
        <div class="text-2xl">Project done</div>
      </div>
      <div class="h-18 bg-white/40 rounded-full w-1"></div>

      <div class="h-40 flex justify-center flex-col p-8 w-1/3">
        <div class="text-hit-orange text-2xl font-semibold">80+</div>
        <div class="text-2xl">Happy Clients</div>
      </div>
    </div>
  </div>
  <div class="w-1/2 justify-center flex ">
    <div
      class="absolute w-[500px] h-[500px] mt-75 bg-black/40 rounded-full z-1"
    ></div>
    <img src="adam.png" alt="" class="z-2 w-130" />
  </div>
</div>

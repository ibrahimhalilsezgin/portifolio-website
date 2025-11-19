<script lang="ts">
  import { goto } from "$app/navigation";

    let barButton:HTMLButtonElement;
    let xButton:HTMLButtonElement;
    let menuDiv:HTMLDivElement;
    
    function openMenu() {
        barButton.classList.remove('flex');
        barButton.classList.add('hidden');

        xButton.classList.remove('hidden');
        xButton.classList.add('flex');


        menuDiv.classList.remove('hidden');

    }
    function closeMenu() {
        xButton.classList.remove('flex');
        xButton.classList.add('hidden');

        barButton.classList.remove('hidden');
        barButton.classList.add('flex');

        menuDiv.classList.add('hidden');

    }
  function scrollToSection(event: Event, id: string) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

</script>

<div class="p-11 flex">
    <div class="w-1/3 text-2xl md:text-3xl text-hit text-nowrap">
        İbrahim Halil Sezgin
    </div>
    <div class="hidden md:flex gap-8 w-1/3 justify-center text-xl text-white/70">
        <button on:click={(e) => scrollToSection(e,"/home")} class="cursor-pointer" aria-label="nav-link" >Anasayfa</button>
        <button on:click={(e) => scrollToSection(e,"services")} class="cursor-pointer" aria-label="nav-link">Hizmetler</button>
        <button on:click={(e) => scrollToSection(e,"aboutme")} class="cursor-pointer" aria-label="nav-link">Hakkımda</button>
        <button on:click={(e) => scrollToSection(e,"contact")} class="cursor-pointer" aria-label="nav-link">İletişim</button>
        <button on:click={(e) => goto('/blog')} class="cursor-pointer" aria-label="nav-link">Blog</button>
    </div>

    <button class="md:hidden w-full flex justify-end" bind:this={barButton} aria-label="menu" on:click={openMenu}>
        <i class="fa fa-bars text-4xl"></i>
    </button>
    <button class="hidden w-full justify-end" bind:this={xButton} aria-label="menu" on:click={closeMenu}>
        <i class="fa fa-x text-4xl"></i>
    </button>
</div>
<div class="bg-[#1b1b1b] text-center hidden" bind:this={menuDiv}>
    <div class="flex-col flex justify-center text-xl text-white/70 gap-4">
        <button on:click={(e) => scrollToSection(e,"home")} class="text-hit border border-white/25 rounded-lg p-4">Anasayfa</button>
        <button on:click={(e) => scrollToSection(e,"services")} class="border border-white/25 rounded-lg p-4">Hizmetler</button>
        <button on:click={(e) => scrollToSection(e,"aboutme")} class="border border-white/25 rounded-lg p-4">Hakkımda</button>
        <button on:click={(e) => scrollToSection(e,"contact")} class="border border-white/25 rounded-lg p-4">İletişim</button>
        <button on:click={(e) => goto("blog")} class="border border-white/25 rounded-lg p-4">Blog</button>
    </div>
</div>
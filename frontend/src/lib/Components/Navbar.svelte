<script lang="ts">
  import { goto } from "$app/navigation";

    let barButton:HTMLDivElement;
    let xButton:HTMLDivElement;
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
        <div on:click={(e) => scrollToSection(e,"home")} class="cursor-pointer" aria-label="nav-link" >Anasayfa</div>
        <div on:click={(e) => scrollToSection(e,"services")} class="cursor-pointer" aria-label="nav-link">Hizmetler</div>
        <div on:click={(e) => scrollToSection(e,"aboutme")} class="cursor-pointer" aria-label="nav-link">Hakkımda</div>
        <div on:click={(e) => scrollToSection(e,"contact")} class="cursor-pointer" aria-label="nav-link">İletişim</div>
        <div on:click={(e) => goto('/blog')} class="cursor-pointer" aria-label="nav-link">Blog</div>
    </div>

    <div class="md:hidden w-full flex justify-end" bind:this={barButton} on:click={openMenu}>
        <i class="fa fa-bars text-4xl"></i>
    </div>
    <div class="hidden w-full justify-end" bind:this={xButton} on:click={closeMenu}>
        <i class="fa fa-x text-4xl"></i>
    </div>
</div>
<div class="bg-[#1b1b1b] text-center hidden" bind:this={menuDiv}>
    <div class="flex-col flex justify-center text-xl text-white/70 gap-4">
        <div on:click={(e) => scrollToSection(e,"home")} class="text-hit border border-white/25 rounded-lg p-4">Anasayfa</div>
        <div on:click={(e) => scrollToSection(e,"services")} class="border border-white/25 rounded-lg p-4">Hizmetler</div>
        <div on:click={(e) => scrollToSection(e,"aboutme")} class="border border-white/25 rounded-lg p-4">Hakkımda</div>
        <div on:click={(e) => scrollToSection(e,"contact")} class="border border-white/25 rounded-lg p-4">İletişim</div>
        <div on:click={(e) => goto("blog")} class="border border-white/25 rounded-lg p-4">Blog</div>
    </div>
</div>
<template>
  <section
    class="h-screen w-full bg-cover bg-center"
    style="background-image: url('/img/cover.jpg');"
  >
    <div
      class="h-screen w-full flex justify-center items-center text-white"
      style="animation: bg-fade-in 5s ease forwards"
    >
      <tagline first="Webを作る、" second="世界を創る。" third="Junya Oiwa's Portfollio ver.2" />
    </div>
    <div class="absolute bottom-0 right-0 md:w-56 w-32">
      <img src="/img/logo-white.png" alt="920oj.net" />
    </div>
  </section>
</template>

<script>
import tagline from '~/components/parts/top/tagline.vue';
import nextbutton from '~/components/ui/nextButton.vue';
export default {
  components: {
    tagline,
    nextbutton,
  },
};
</script>

<style>
</style>
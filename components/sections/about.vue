<template>
  <section
    id="about"
    class="h-screen w-full bg-cover bg-center bg-gray-100 flex items-center justify-center relative"
  >
    <aboutme />
    <bgtext>about</bgtext>
  </section>
</template>

<script>
import aboutme from '~/components/parts/about/aboutme.vue';
import bgtext from '~/components/commons/bgtext.vue';
export default {
  components: {
    aboutme,
    bgtext,
  },
};
</script>

<style>
#about {
  scroll-snap-align: start;
}
</style>
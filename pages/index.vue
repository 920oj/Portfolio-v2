<template>
  <div class="index">
    <top />
    <about />
    <works />
  </div>
</template>

<script>
import top from '~/components/sections/top.vue';
import about from '~/components/sections/about.vue';
import works from '~/components/sections/works.vue';
import contact from '~/components/sections/contact.vue';

export default {
  components: {
    top,
    about,
    works,
    contact,
  },
  mounted() {
    const sections = document.querySelectorAll('section');
    const options = {
      root: document.querySelector('#index'),
      rootMargin: '-10px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(elems => {
      elems.forEach(elem => {
        if (elem.isIntersecting) {
          console.log(elem.target);
        }
      });
    }, options);
    sections.forEach(elem => {
      observer.observe(elem);
    });
  },
};
</script>

<style>
</style>

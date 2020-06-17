<template>
  <div class="index">
    <top />
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
};
</script>

<style>
</style>

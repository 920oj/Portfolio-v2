<template>
  <section id="works" class="h-screen w-full bg-gray-800 flex items-center justify-center">
    <div
      class="overflow-hidden w-full flex justify-center items-center display-none"
      style="height: 80%; min-height: 500px;"
    >
      <div
        id="carousel"
        class="w-full sm:w-9/12 h-full overflow-x-scroll flex whitespace-no-wrap cursor-move"
        v-dragscroll="true"
      >
        <card />
        <card />
        <card />
        <card />
        <card />
      </div>
    </div>
  </section>
</template>

<script>
import card from '~/components/parts/works/card.vue';

export default {
  components: {
    card,
  },
};
</script>

<style>
#works {
  scroll-snap-align: start;
}

#carousel::-webkit-scrollbar {
  display: none;
  -webkit-appearance: none;
}
</style>
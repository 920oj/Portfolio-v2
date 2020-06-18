<template>
  <div class="tagline">
    <div class="flex flex-col justify-center">
      <div class="p-2 md:p-5 border-solid border-1 border inline-block">
        <p
          class="text-5xl md:text-6xl font-bold"
          style="animation: left-to-right 1s cubic-bezier(.23, 1, .32, 1) forwards"
        >{{first}}</p>
        <p
          class="text-5xl md:text-6xl font-bold"
          style="animation: left-to-right 1s cubic-bezier(.23, 1, .32, 1) 0.2s both"
        >{{second}}</p>
      </div>
      <p
        class="text-base text-right"
        style="animation: left-to-right 1s cubic-bezier(.23, 1, .32, 1) 0.4s both"
      >{{third}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['first', 'second', 'third'],
};
</script>

<style>
</style>
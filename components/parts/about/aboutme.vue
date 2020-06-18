<template>
  <div id="about-panel" class="rounded-lg container mx-auto flex flex-col md:flex-row z-50">
    <div class="rounded-lg h-full w-full flex justify-center items-center flex-col">
      <img
        src="/img/oj-icon.jpg"
        alt="Junya Oiwa"
        class="w-2/6 md:w-4/6 rounded-full"
        style="animation: left-to-right 3s cubic-bezier(.23, 1, .32, 1) 0.4s both"
      />
      <p
        class="font-bold text-2xl mt-4"
        style="animation: left-to-right 3s cubic-bezier(.23, 1, .32, 1) 0.6s both"
      >大岩 潤矢(Junya Oiwa)</p>
    </div>
    <div
      class="rounded-lg h-full w-full flex justify-center md:items-center px-8"
      style="animation: right-to-left 3s cubic-bezier(.23, 1, .32, 1) 0.8s both"
    >
      <div class="leading-relaxed text-sm md:text-base">
        <p>東京都市大学 メディア情報学部 社会メディア学科 3年</p>
        <p>Web開発者を目指しています。2019年8月よりVue.jsを用いたモダンWebフロントエンド分野の勉強を始め、現在は主にNuxt.jsを用いて開発。</p>
        <p>個人でのWebアプリ開発を行う傍ら、学生ITエンジニア団体「Steg」の技術統括を務め、学生チームで受託開発を行っています。</p>
        <p>短期間で概念を抽象的に掴み、そこから掘り下げていくことが得意です。「Webを作る、世界を創る」というミッションの元、世界を大きく変えるようなWebアプリを作っていきたいと考えています。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#about-panel {
  height: 90%;
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
<script setup lang="ts">
  import ComButton from '@/components/comButton/comButton.vue';
  import { onMounted } from 'vue';
  import { Downloader, Parser, Player } from 'svga-web';

  const downloader = new Downloader();
  const parser = new Parser();
  const player = new Player('#canvas'); // #canvas is HTMLCanvasElement

  (async () => {
    const fileData = await downloader.get('svga/long.svga');
    const svgaData = await parser.do(fileData);

    player.set({
      loop: 1,
      fillMode: 'forwards'
    });

    await player.mount(svgaData);

    player
      .$on('start', () => console.log('event start'))
      .$on('pause', () => console.log('event pause'))
      .$on('stop', () => console.log('event stop'))
      .$on('end', () => console.log('event end'))
      .$on('clear', () => console.log('event clear'))
      .$on('process', () => console.log('event process', player.progress));

    player.start();
    // player.pause()
    // player.stop()
    // player.clear()
  })();
  const handerClick = () => {
    console.log(1234);
  };
  onMounted(async () => {});
</script>

<template>
  <com-button title="登录" size="sm" disabled type="success" @click="handerClick"></com-button>
  <br />
  <canvas id="canvas"></canvas>
</template>

<style scoped lang="scss">
  #demo {
    width: 189px;
    height: 80px;
  }
</style>

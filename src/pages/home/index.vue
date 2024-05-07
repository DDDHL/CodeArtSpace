<script setup lang="ts">
import TypeIt from 'TypeIt'

onMounted(() => {
  new TypeIt('#homeTitle', {
    strings: ['Code Art Space '],
    speed: 100,
    waitUntilVisible: true,
  }).go()
})
</script>

<template>
  <div class="home">
    <section class="center">
      <p class="title" id="homeTitle"></p>
      <p class="introduce">快不快乐有天总过去</p>
      <div class="btn">
        <n-button strong secondary> 切换主题 </n-button>
        <n-button strong secondary type="primary"> 进入网站 </n-button>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .center {
    width: 50vw;
    text-align: center;
    .title {
      margin-top: -8vh;
      font-size: 0.4rem;
      font-weight: 500;
    }
    .btn {
      width: 14vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
    }
    .introduce,
    .btn {
      margin-top: 4vh;
      font-size: 0.13rem;
    }
  }
}
</style>

<script setup>

</script>

<style scoped >
video{
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  -webkit-filter: grayscale(20%);
}





</style>

<template>
  <video src="../assets/bg.mp4" loop="loop" autoplay="autoplay" muted></video>
  <div >
  <vuetyped
        :strings="['Welcome to','FightingCS!']"
        :loop="true"
        :startDelay="300"
        :typeSpeed="100"
        :backSpeed="50"
    >
      <h1  class="typing" style="color: #ff0000"></h1>
    </vuetyped>
    <br/>
    <el-text size="large" type="danger">hello,world,this is fightcs!</el-text>
  </div>

</template>

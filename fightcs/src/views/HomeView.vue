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

@font-face {
  font-family: "cs";
  src: url('../assets/font/cs_regular.ttf');
  font-weight: normal;
  font-style: normal;
}




</style>

<template>
  <video src="../assets/bg.mp4" loop="loop" autoplay="autoplay" muted></video>
  <el-row justify="center">
    <el-col :span="24" >
      <vuetyped
            :strings="['Welcome to','FightingCS!']"
            :loop="true"
            :startDelay="300"
            :typeSpeed="100"
            :backSpeed="50"
        >
        <h1  class="typing" style="color: #ff0000;font-family:cs;"></h1>
      </vuetyped>
      <br/>
      <h3  style="color: #fb4646;font-family:cs;">hello,world,this is fightcs!</h3>
    </el-col>
  </el-row>

</template>

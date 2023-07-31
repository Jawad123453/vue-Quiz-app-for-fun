<script setup lang="ts">
import Quizcore from './components/Quizcore.vue';
import { useCounterStore } from "./stores/counter"

const stote1=useCounterStore()
</script>

<template>
  <div class="app">
    <h1 class="mainheader">Vue App</h1>
    <h2 class="mainscore">Score: {{ stote1.score }}</h2>
    <h2 class="mainscore" v-if="stote1.questionnumber == stote1.arrayofqustions.length">From {{ stote1.arrayofqustions.length }} questions you get {{ stote1.score }} right</h2>
    <Quizcore />
  </div>
</template>

<style>
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
.app{
  background:linear-gradient(to bottom,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2)),url("./assets/heroimg.jpg");
  width:100%;
  min-height:100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1.mainheader{
  padding: 20px 0;
  font-size: 30px;
  color:white;
  text-align: center;
}
h2.mainscore{
  color:white;
  text-align: center;
  font-size: 22px;
  margin-bottom: 5px;
}
</style>
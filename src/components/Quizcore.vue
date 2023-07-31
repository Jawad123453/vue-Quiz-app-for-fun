<template>
  <div class="mainbox">
    <div v-if="stote1.questionnumber < stote1.arrayofqustions.length">
      <h3>Questions <span>{{stote1.questionnumber + 1}}</span>/<span>{{ stote1.arrayofqustions.length }}</span></h3>
      <div class="mainone">{{ stote1.arrayofqustions[stote1.questionnumber].mainqustion }}</div>
      <div class="options">
        <div v-for="(items,index) in stote1.arrayofqustions[stote1.questionnumber].answers" :key="index" @click="stote1.incrementofquestionnumber(stote1.arrayofqustions[stote1.questionnumber].answers[index])">{{ items }}</div>
      </div>
    </div>
    <div v-else>
      <h1 :class="stote1.finialclass">{{stote1.seeifgood(stote1.score)}}</h1>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter"

const stote1=useCounterStore()

</script>

<style scoped>
.mainbox{
  background-color: white;
  padding:10px;
  width:300px;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
}
.mainbox h3{
  color:brown;
  margin-bottom: 10px;
}
.mainbox .mainone{
  margin-bottom: 15px;
  font-size: 22px;
}
.mainbox .options{
  display: flex;
  flex-direction: column;
  gap:10px;
  width:100%;
  margin-bottom: 20px;
}
.mainbox .options div{
  width:100%;
  background-color: transparent;
  padding:5px 0;
  border-radius: 30px;
  cursor: pointer;
  color:black;
  border: 2px solid black;
  transition: 0.3s ease;
}
.mainbox .options div.wrong{
  background-color: red;
  color:white;
  border: 2px solid red;
}
.mainbox .options div.right{
  background-color: green;
  color:white;
  border: 2px solid green;
}
.mainbox .options div:hover{
  background-color: black;
  color:white;
}
h1.goodjob{
  color:green;
}
h1.pass{
  color:black;
}
h1.fail{
  color:red;
}
</style>
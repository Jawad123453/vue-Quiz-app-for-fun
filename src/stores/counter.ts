import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const score = ref(0)
  const questionnumber = ref(0)

  const shuffle = (array: string[]) => { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
  };

  const arrayofqustions=[
    {mainqustion:"what does h1 do",answers:shuffle(["increase the font size","nothing just there","css thing","decrease the font size"]),rightanwer:"increase the font size"},
    {mainqustion:"what does h2 do",answers:shuffle(["increase the font size","nothing just there","css thing","decrease the font size"]),rightanwer:"increase the font size"},
    {mainqustion:"what does h3 do",answers:shuffle(["increase the font size","nothing just there","css thing","decrease the font size"]),rightanwer:"increase the font size"},
    {mainqustion:"what does h4 do",answers:shuffle(["increase the font size","nothing just there","css thing","decrease the font size"]),rightanwer:"increase the font size"},
    {mainqustion:"what does h5 do",answers:shuffle(["increase the font size","nothing just there","css thing","decrease the font size"]),rightanwer:"increase the font size"},
    {mainqustion:"what does h6 do",answers:shuffle(["increase the font size","nothing just there","css thing","decrease the font size"]),rightanwer:"increase the font size"},
  ]

  const finialresult = ref("")
  const finialclass = ref("")
  function incrementofquestionnumber(cooshen: string) {
    if(arrayofqustions[questionnumber.value].rightanwer == cooshen){
      score.value++
    }
    questionnumber.value++
  }
  function seeifgood(thisnumber:number){
    if(thisnumber >= 5){
      finialclass.value="goodjob"
      return finialresult.value = "Good Job"
    }else if(thisnumber == 4 || thisnumber == 3){
      finialclass.value="pass"
      return finialresult.value = "You Pass"
    }else{
      finialclass.value="fail"
      return finialresult.value = "You Fail"
    }
  }

  return { score,arrayofqustions,questionnumber,finialclass,seeifgood,incrementofquestionnumber }
})

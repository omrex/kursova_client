<template>
  <h1>"Разписание Ввму"</h1>
  <input type="text"   v-model='input' @keyup.enter="this.search()"  id="messageBox"  placeholder="Type your заявка here" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px;" />
  <button @click="this.search()" id="send" title="Send Message!" style="width: 100%; height: 30px;">Send Message</button>
  <div v-for="text of this.text" v-bind:key="text">{{text}}</div>
  <table>
    <tr>
      <th>Start_hour</th>
      <th>Discipline_ID</th>
      <th>Discipline_ROOM</th>
    </tr>
    <tr v-for="row in this.result" v-bind:key="row">
      <td>{{this.result[row].startHour}}</td>

    </tr>
  </table>



</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

import axios from "axios";

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  data(){
    return{
      input:'',
      result:[],
      text: ["zdr"]
      //променливи
    }
  },
  computed: {

  },

  methods: {
    changeText() {
      let n = ["abcd"]
      this.text = [...this.text, ...n]
    },
    search: function () {
      // Call your server here
      axios.get('http://localhost:3001/vvmu?query=' + this.input)
          .then(function (res) {
            //this.result=[{startHour: 1, room: 5, disciplineID: 5}]
            //this.result. push(res.data.toString());
            console.log(res);
          })
          .catch(function (err) {
            // handle error
            console.log(err);
          })
    }
  }

}
</script>

<style>
app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

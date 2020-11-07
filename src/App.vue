<template>
  <div id="app">
    <HelloWorld msg="换的话"/>
    <h2>{{ss}}</h2>
    {{age}}
    <button @click="cljia()">+</button>
    <button @click="cljian()">+</button>
    <div v-for="a in ca" :key="a.value">{{a.a}}--</div>
    <div v-for="a in caa" :key="a">{{a}}--</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      ss:"属性",
      age:50,
      ca:[
        {a:12},{a:13},{a:14},{a:15}
      ],caa:{
        a:"111",
        aa:"2111"

      }
    }
  },
  filters:{
    grea(a){
      console(a+"---");
      return a>12
    }
  },
  methods: {
    cl(){
      this.ss="我变了"
    },
    cljia(){
      this.age++
    },
    cljian(){
      this.age--
    }
},
  beforeCreate(){
    console.log("beforeCreate");
  },
  created(){
    console.log("created");
  },
  beforeMount(){
    console.log("beforeMount");
  },
  mounted(){
    console.log("mounted");
  },
  beforeUpdate(){
    console.log("beforeUpdate");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

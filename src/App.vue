<template>
    <div>
    <navbar></navbar>
    <router-view/>
    </div>
</template>

<script>
import navbar from './components/navbar'


export default {
  name: 'App',
  data(){
    return{
    }
  },
  components:{
    navbar
  }
}
</script>

<style>

</style>

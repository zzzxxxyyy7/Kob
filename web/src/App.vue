<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

export default{
    components:{
      NavBar
    }
}
</script>

<style>
body{
  background-image: url("@/assets/image/BackGround-image.png");
  background-size: 100%;
}
</style>

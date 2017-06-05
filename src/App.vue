<template>
  <div id="app">

   <transition name="slide-fade">
     <router-view></router-view>
   </transition>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  #app {
    font-family: 'Raleway', sans-serif;
    margin: 0 auto;
  }

  body {
    margin: 0px;
    background: #324057;
  }


</style>
